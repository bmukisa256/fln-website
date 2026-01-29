<?php
session_start();
require_once '../config/auth.php';
require_once '../includes/functions.php';

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
    
    // Get and validate subscriber ID
    $id = $_POST['id'] ?? '';
    if (empty($id) || !is_numeric($id)) {
        throw new Exception('Invalid subscriber ID');
    }
    
    // Delete subscriber
    $subscriberManager = new SubscriberManager();
    $subscriberManager->removeSubscriber($id);
    
    jsonResponse([
        'success' => true,
        'message' => 'Subscriber removed successfully'
    ]);
    
} catch (Exception $e) {
    jsonResponse([
        'success' => false,
        'message' => $e->getMessage()
    ], 400);
}
?>