<?php
session_start();
require_once 'includes/functions.php';

$pageTitle = 'Unsubscribe';
$message = '';
$success = false;

if (isset($_GET['token'])) {
    try {
        $token = base64_decode($_GET['token']);
        $parts = explode('|', $token);
        
        if (count($parts) === 2) {
            $email = $parts[0];
            $timestamp = $parts[1];
            
            // Check if token is not too old (7 days)
            if (time() - $timestamp < 604800) {
                $subscriberManager = new SubscriberManager();
                $subscriberManager->unsubscribe($email);
                
                $success = true;
                $message = "You have been successfully unsubscribed from our newsletter.";
            } else {
                $message = "This unsubscribe link has expired. Please contact us directly.";
            }
        } else {
            $message = "Invalid unsubscribe link.";
        }
    } catch (Exception $e) {
        $message = "An error occurred while processing your request.";
    }
} else {
    $message = "No unsubscribe token provided.";
}
?>

<?php include 'includes/header.php'; ?>

<div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
        <div class="text-center">
            <?php if ($success): ?>
                <svg class="mx-auto h-16 w-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <h2 class="text-3xl font-bold text-gray-900">Unsubscribed Successfully</h2>
            <?php else: ?>
                <svg class="mx-auto h-16 w-16 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                </svg>
                <h2 class="text-3xl font-bold text-gray-900">Unsubscribe Error</h2>
            <?php endif; ?>
            
            <p class="mt-4 text-gray-600"><?php echo htmlspecialchars($message); ?></p>
            
            <div class="mt-8">
                <a href="/" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                    Back to Homepage
                </a>
            </div>
            
            <?php if ($success): ?>
            <div class="mt-6 text-sm text-gray-500">
                <p>We're sorry to see you go! If you change your mind, you can always subscribe again on our homepage.</p>
            </div>
            <?php endif; ?>
        </div>
    </div>
</div>

<?php include 'includes/footer.php'; ?>