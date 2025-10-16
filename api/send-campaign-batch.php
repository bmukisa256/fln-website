<?php
session_start();
require_once '../config/auth.php';
require_once '../includes/functions.php';
require_once '../config/email.php';
require_once '../config/templates.php';

header('Content-Type: application/json');
header('Cache-Control: no-cache');

// Require admin authentication for API access
if (!AdminAuth::isLoggedIn()) {
    jsonResponse([
        'success' => false,
        'message' => 'Authentication required'
    ], 401);
}

try {
    // Check if request is POST
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception('Method not allowed');
    }
    
    // Validate CSRF token
    $csrf_token = $_POST['csrf_token'] ?? '';
    if (!validateCSRFToken($csrf_token)) {
        throw new Exception('Invalid request');
    }
    
    // Get and validate input
    $subject = trim($_POST['subject'] ?? '');
    $content = trim($_POST['content'] ?? '');
    $template = trim($_POST['template'] ?? '');
    $selectedSubscribers = $_POST['selected_subscribers'] ?? [];
    $batch = intval($_POST['batch'] ?? 0);
    $batchSize = 5; // Send 5 emails per batch
    
    if (empty($subject)) {
        throw new Exception('Subject is required');
    }
    
    if (empty($content)) {
        throw new Exception('Content is required');
    }
    
    if (empty($selectedSubscribers)) {
        throw new Exception('Please select at least one subscriber to send the campaign to');
    }
    
    // Validate selected subscriber IDs
    if (!is_array($selectedSubscribers)) {
        throw new Exception('Invalid subscriber selection');
    }
    
    // Sanitize selected subscriber IDs
    $selectedSubscribers = array_map('intval', $selectedSubscribers);
    $selectedSubscribers = array_filter($selectedSubscribers, function($id) {
        return $id > 0;
    });
    
    if (empty($selectedSubscribers)) {
        throw new Exception('Invalid subscriber selection');
    }
    
    // Get subscribers and managers
    $subscriberManager = new SubscriberManager();
    $campaignManager = new CampaignManager();
    $emailSender = new EmailSender();
    
    // Get only selected active subscribers
    $allActiveSubscribers = $subscriberManager->getActiveSubscribers();
    $selectedSubscribersList = [];
    
    // Filter to only include selected subscribers
    foreach ($allActiveSubscribers as $subscriber) {
        if (in_array($subscriber['id'], $selectedSubscribers)) {
            $selectedSubscribersList[] = $subscriber;
        }
    }
    
    $totalRecipients = count($selectedSubscribersList);
    
    if ($totalRecipients === 0) {
        throw new Exception('No valid selected subscribers found');
    }
    
    // Calculate batch slice
    $startIndex = $batch * $batchSize;
    $batchSubscribers = array_slice($selectedSubscribersList, $startIndex, $batchSize);
    
    if (empty($batchSubscribers)) {
        throw new Exception('No more subscribers to process');
    }
    
    // Initialize session variables for campaign tracking
    if ($batch === 0) {
        $_SESSION['campaign_progress'] = [
            'total' => $totalRecipients,
            'sent' => 0,
            'failed' => 0,
            'failed_emails' => [],
            'start_time' => time()
        ];
    }
    
    // Send emails in this batch
    $batchSuccessCount = 0;
    $batchFailedEmails = [];
    
    foreach ($batchSubscribers as $subscriber) {
        try {
            $emailSender->sendCampaign($subscriber['email'], $subject, $content, $template);
            $batchSuccessCount++;
            $_SESSION['campaign_progress']['sent']++;
        } catch (Exception $e) {
            $batchFailedEmails[] = $subscriber['email'];
            $_SESSION['campaign_progress']['failed']++;
            $_SESSION['campaign_progress']['failed_emails'][] = $subscriber['email'];
            error_log("Failed to send email to {$subscriber['email']}: " . $e->getMessage());
        }
    }
    
    $totalSent = $_SESSION['campaign_progress']['sent'];
    $totalFailed = $_SESSION['campaign_progress']['failed'];
    $isComplete = ($startIndex + $batchSize) >= $totalRecipients;
    
    // Save campaign to database when complete
    if ($isComplete && $batch === 0) {
        $campaignManager->addCampaign($subject, $content, $totalSent);
    } elseif ($isComplete && $totalSent > 0) {
        $campaignManager->addCampaign($subject, $content, $totalSent);
    }
    
    // Prepare response
    $response = [
        'success' => true,
        'batch' => $batch,
        'batch_sent' => $batchSuccessCount,
        'batch_failed' => count($batchFailedEmails),
        'total_sent' => $totalSent,
        'total_failed' => $totalFailed,
        'total_recipients' => $totalRecipients,
        'progress_percentage' => round((($totalSent + $totalFailed) / $totalRecipients) * 100, 1),
        'is_complete' => $isComplete,
        'current_batch_emails' => array_map(function($sub) { return $sub['email']; }, $batchSubscribers),
        'failed_emails_this_batch' => $batchFailedEmails
    ];
    
    if ($isComplete) {
        $response['final_stats'] = [
            'total_sent' => $totalSent,
            'total_failed' => $totalFailed,
            'success_rate' => round(($totalSent / $totalRecipients) * 100, 1),
            'duration' => time() - $_SESSION['campaign_progress']['start_time'],
            'failed_emails' => $_SESSION['campaign_progress']['failed_emails']
        ];
        
        // Clear session data
        unset($_SESSION['campaign_progress']);
    }
    
    jsonResponse($response);
    
} catch (Exception $e) {
    jsonResponse([
        'success' => false,
        'message' => $e->getMessage()
    ], 400);
}
?>