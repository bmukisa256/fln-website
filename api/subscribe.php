<?php
session_start();
require_once __DIR__ . '/../includes/functions.php';

header('Content-Type: application/json');

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
    
    // Get and validate email
    $email = trim($_POST['email'] ?? '');
    if (empty($email)) {
        throw new Exception('Email is required');
    }
    
    if (!validateEmail($email)) {
        throw new Exception('Invalid email format');
    }
    
    // Add subscriber
    $subscriberManager = new SubscriberManager();
    $subscriberId = $subscriberManager->addSubscriber($email);
    
    // Send welcome email (optional - can be disabled in production)
    try {
        require_once __DIR__ . '/../config/email.php';
        $emailSender = new EmailSender();
        $emailSender->sendWelcomeEmail($email);
    } catch (Exception $e) {
        // Log email error but don't fail the subscription
        error_log("Failed to send welcome email to {$email}: " . $e->getMessage());
    }
    
    // Send success response
    jsonResponse([
        'success' => true,
        'message' => 'Successfully subscribed! Welcome aboard!',
        'subscriber_id' => $subscriberId
    ]);
    
} catch (Exception $e) {
    // Send error response
    jsonResponse([
        'success' => false,
        'message' => $e->getMessage()
    ], 400);
}
?>