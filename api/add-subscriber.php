<?php
session_start();
require_once '../config/auth.php';
require_once '../includes/functions.php';
require_once '../config/email.php';

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
    $email = trim($_POST['email'] ?? '');
    $status = trim($_POST['status'] ?? 'active');
    $sendWelcome = isset($_POST['send_welcome']) && $_POST['send_welcome'];
    
    if (empty($email)) {
        throw new Exception('Email is required');
    }
    
    if (!validateEmail($email)) {
        throw new Exception('Invalid email format');
    }
    
    // Validate status
    if (!in_array($status, ['active', 'unsubscribed'])) {
        $status = 'active';
    }
    
    // Create subscriber manager and add subscriber
    $subscriberManager = new SubscriberManager();
    
    try {
        $subscriberId = $subscriberManager->addSubscriber($email);
        
        // If status is unsubscribed, update it after creation
        if ($status === 'unsubscribed') {
            $subscriberManager->unsubscribe($email);
        }
        
        // Send welcome email if requested and subscriber is active
        $welcomeEmailSent = false;
        if ($sendWelcome && $status === 'active') {
            try {
                $emailSender = new EmailSender();
                $emailSender->sendWelcomeEmail($email);
                $welcomeEmailSent = true;
            } catch (Exception $e) {
                // Log email error but don't fail the subscription
                error_log("Failed to send welcome email to {$email}: " . $e->getMessage());
            }
        }
        
        // Get the created subscriber details
        $allSubscribers = $subscriberManager->getAllSubscribers();
        $createdSubscriber = null;
        foreach ($allSubscribers as $subscriber) {
            if ($subscriber['id'] == $subscriberId) {
                $createdSubscriber = $subscriber;
                break;
            }
        }
        
        // Send success response
        jsonResponse([
            'success' => true,
            'message' => 'Subscriber added successfully!',
            'subscriber' => $createdSubscriber,
            'welcome_email_sent' => $welcomeEmailSent
        ]);
        
    } catch (Exception $e) {
        if (strpos($e->getMessage(), 'already subscribed') !== false) {
            throw new Exception('This email address is already subscribed');
        }
        throw $e;
    }
    
} catch (Exception $e) {
    jsonResponse([
        'success' => false,
        'message' => $e->getMessage()
    ], 400);
}
?>