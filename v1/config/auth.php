<?php
// Admin authentication configuration

// Admin credentials (in production, store hashed passwords in database)
define('ADMIN_USERNAME', 'fln_admin');
define('ADMIN_PASSWORD_HASH', password_hash('Blue!3_Tango7&Maple', PASSWORD_DEFAULT)); // Change this password!

class AdminAuth
{

    public static function login($username, $password)
    {
        if ($username === ADMIN_USERNAME && password_verify($password, ADMIN_PASSWORD_HASH)) {
            $_SESSION['admin_logged_in'] = true;
            $_SESSION['admin_username'] = $username;
            $_SESSION['login_time'] = time();
            return true;
        }
        return false;
    }

    public static function logout()
    {
        unset($_SESSION['admin_logged_in']);
        unset($_SESSION['admin_username']);
        unset($_SESSION['login_time']);
        session_destroy();
    }

    public static function isLoggedIn()
    {
        return isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true;
    }

    public static function requireLogin()
    {
        if (!self::isLoggedIn()) {
            header('Location: login.php');
            exit();
        }

        // Check session timeout (8 hours)
        if (isset($_SESSION['login_time']) && (time() - $_SESSION['login_time']) > 28800) {
            self::logout();
            header('Location: login.php?expired=1');
            exit();
        }

        // Update last activity time
        $_SESSION['login_time'] = time();
    }

    public static function generateCSRFToken()
    {
        if (!isset($_SESSION['csrf_token'])) {
            $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
        }
        return $_SESSION['csrf_token'];
    }

    public static function validateCSRFToken($token)
    {
        return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
    }
}
