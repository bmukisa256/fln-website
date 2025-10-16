<?php
session_start();
require_once '../config/auth.php';

// Perform logout
AdminAuth::logout();

$pageTitle = 'Logged Out';
?>

<?php include '../includes/header.php'; ?>

<div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div class="max-w-md w-full space-y-8 text-center">
        <div>
            <div class="mx-auto h-16 w-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
            </div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Logged Out Successfully
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
                You have been safely logged out of the admin dashboard.
            </p>
        </div>
        
        <div class="space-y-4">
            <a href="login.php" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                Login Again
            </a>
            
            <a href="../" class="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                Back to Website
            </a>
        </div>
    </div>
</div>

<script>
// Auto-redirect to login page after 5 seconds
setTimeout(function() {
    window.location.href = 'login.php';
}, 5000);
</script>

<?php include '../includes/footer.php'; ?>