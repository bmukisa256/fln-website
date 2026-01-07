<?php
session_start();
require_once '../config/auth.php';
require_once '../includes/functions.php';
require_once '../config/email.php';
require_once '../config/templates.php';

header('Content-Type: application/json');

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
    
    $recipientCount = count($selectedSubscribersList);
    
    if ($recipientCount === 0) {
        throw new Exception('No valid selected subscribers found');
    }
    
    // Send emails to all subscribers
    $successCount = 0;
    $failedEmails = [];
    
    foreach ($selectedSubscribersList as $subscriber) {
        try {
            $emailSender->sendCampaign($subscriber['email'], $subject, $content, $template);
            $successCount++;
        } catch (Exception $e) {
            $failedEmails[] = $subscriber['email'];
            error_log("Failed to send email to {$subscriber['email']}: " . $e->getMessage());
        }
    }
    
    // Save campaign to database
    $campaignId = $campaignManager->addCampaign($subject, $content, $successCount);
    
    // Prepare response
    $response = [
        'success' => true,
        'message' => "Campaign sent successfully to {$successCount} subscribers",
        'campaign_id' => $campaignId,
        'sent_count' => $successCount,
        'total_count' => $recipientCount
    ];
    
    if (!empty($failedEmails)) {
        $response['warning'] = 'Some emails failed to send';
        $response['failed_emails'] = $failedEmails;
    }
    
    jsonResponse($response);
    
} catch (Exception $e) {
    jsonResponse([
        'success' => false,
        'message' => $e->getMessage()
    ], 400);
}
?>