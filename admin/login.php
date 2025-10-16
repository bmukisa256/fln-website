<?php
session_start();
require_once '../config/auth.php';

$pageTitle = 'Admin Login';
$error = '';
$expired = isset($_GET['expired']);

// Redirect if already logged in
if (AdminAuth::isLoggedIn()) {
    header('Location: index.php');
    exit();
}

// Handle login form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';
    $csrf_token = $_POST['csrf_token'] ?? '';
    
    // Validate CSRF token
    if (!AdminAuth::validateCSRFToken($csrf_token)) {
        $error = 'Invalid request. Please try again.';
    } elseif (empty($username) || empty($password)) {
        $error = 'Please enter both username and password.';
    } elseif (AdminAuth::login($username, $password)) {
        header('Location: index.php');
        exit();
    } else {
        $error = 'Invalid username or password.';
        // Add a small delay to prevent brute force attacks
        sleep(1);
    }
}

$csrfToken = AdminAuth::generateCSRFToken();
?>

<?php include '../includes/header.php'; ?>

<div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div class="max-w-md w-full space-y-8">
        <div>
            <div class="mx-auto h-16 w-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
            </div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Admin Login
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
                Access the email subscription dashboard
            </p>
        </div>
        
        <form class="mt-8 space-y-6" method="POST">
            <input type="hidden" name="csrf_token" value="<?php echo $csrfToken; ?>">
            
            <div class="rounded-md shadow-sm -space-y-px">
                <div>
                    <label for="username" class="sr-only">Username</label>
                    <input 
                        id="username" 
                        name="username" 
                        type="text" 
                        required 
                        class="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" 
                        placeholder="Username"
                        value="<?php echo htmlspecialchars($_POST['username'] ?? ''); ?>"
                    >
                </div>
                <div>
                    <label for="password" class="sr-only">Password</label>
                    <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        required 
                        class="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" 
                        placeholder="Password"
                    >
                </div>
            </div>

            <?php if ($error): ?>
            <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
                <span class="block sm:inline"><?php echo htmlspecialchars($error); ?></span>
            </div>
            <?php endif; ?>

            <?php if ($expired): ?>
            <div class="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded relative" role="alert">
                <span class="block sm:inline">Your session has expired. Please log in again.</span>
            </div>
            <?php endif; ?>

            <div>
                <button 
                    type="submit" 
                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                        <svg class="h-5 w-5 text-blue-300 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
                        </svg>
                    </span>
                    Sign in
                </button>
            </div>
            
            <div class="text-center">
                <a href="../" class="text-primary hover:text-blue-700 text-sm">
                    ← Back to website
                </a>
            </div>
        </form>
        
        <div class="mt-6 text-center">
            <div class="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded text-sm">
                <strong>Demo Credentials:</strong><br>
                Username: <code class="bg-blue-100 px-1 rounded">admin</code><br>
                Password: <code class="bg-blue-100 px-1 rounded">admin123</code>
            </div>
        </div>
    </div>
</div>

<script>
// Focus on username field when page loads
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('username').focus();
});

// Form validation
document.querySelector('form').addEventListener('submit', function(e) {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        e.preventDefault();
        alert('Please enter both username and password.');
        return false;
    }
});
</script>

<?php include '../includes/footer.php'; ?>