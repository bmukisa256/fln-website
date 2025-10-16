# Email Subscription System - Setup Guide

## 1. PHPMailer Installation

### Option A: Using Composer (Recommended)
```bash
cd php/
composer install
```

### Option B: Manual Installation
1. Download PHPMailer from https://github.com/PHPMailer/PHPMailer
2. Extract to `php/vendor/phpmailer/phpmailer/`
3. Update the path in `config/email.php` if needed

## 2. Database Setup

1. **Create Database:**
   ```sql
   CREATE DATABASE email_subscription_system;
   ```

2. **Import Schema:**
   ```bash
   mysql -u username -p email_subscription_system < database.sql
   ```

3. **Update Database Configuration:**
   Edit `config/database.php`:
   ```php
   define('DB_HOST', 'localhost');
   define('DB_USER', 'your_username');
   define('DB_PASS', 'your_password');
   define('DB_NAME', 'email_subscription_system');
   ```

## 3. Email Configuration

Edit `config/email.php` with your email settings:

### For Gmail:
```php
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'your-email@gmail.com');
define('SMTP_PASSWORD', 'your-app-password'); // Use App Password!
define('SMTP_ENCRYPTION', 'tls');
define('FROM_EMAIL', 'your-email@gmail.com');
define('FROM_NAME', 'Your Newsletter');
```

### Gmail App Password Setup:
1. Enable 2-Factor Authentication on your Google account
2. Go to Google Account settings
3. Security → 2-Step Verification → App passwords
4. Generate an app password for "Mail"
5. Use this password in the configuration

### For Other Email Providers:
```php
// Outlook/Hotmail
define('SMTP_HOST', 'smtp-mail.outlook.com');
define('SMTP_PORT', 587);

// Yahoo
define('SMTP_HOST', 'smtp.mail.yahoo.com');
define('SMTP_PORT', 587);

// Custom SMTP
define('SMTP_HOST', 'mail.yourdomain.com');
define('SMTP_PORT', 587); // or 465 for SSL
```

## 4. Admin Account Setup

### Default Credentials:
- **Username:** `admin`
- **Password:** `admin123`

### To Change Admin Password:
Edit `config/auth.php`:
```php
define('ADMIN_PASSWORD_HASH', password_hash('your_new_password', PASSWORD_DEFAULT));
```

### For Production:
Consider moving admin credentials to a database table with proper user management.

## 5. File Permissions

Ensure your web server can read all PHP files:
```bash
chmod -R 644 php/
chmod -R 755 php/config/
chmod -R 755 php/includes/
chmod -R 755 php/admin/
chmod -R 755 php/api/
```

## 6. Testing

1. **Test Database Connection:**
   Visit `php/` in your browser - should show the homepage

2. **Test Subscription:**
   - Enter an email on the homepage
   - Check database for new subscriber

3. **Test Admin Login:**
   - Go to `php/admin/`
   - Login with admin credentials

4. **Test Email Sending:**
   - Login to admin dashboard
   - Send a test campaign
   - Check email delivery

## 7. Security Considerations

### For Production:
1. **Change Default Admin Password**
2. **Use HTTPS** (SSL certificate)
3. **Database Security:**
   - Use non-root database user
   - Restrict database permissions
4. **File Permissions:**
   - Remove write permissions from PHP files
   - Protect config files
5. **Rate Limiting:**
   - Implement rate limiting on subscription form
6. **Email Validation:**
   - Consider email verification process

## 8. Troubleshooting

### Common Issues:

**Database Connection Error:**
- Check database credentials in `config/database.php`
- Ensure MySQL server is running
- Verify database exists

**PHPMailer Not Found:**
- Run `composer install` in php/ directory
- Check autoloader path in `config/email.php`

**Email Not Sending:**
- Verify SMTP credentials
- Check if "Less secure app access" is enabled (for older email providers)
- Use App Passwords for Gmail
- Check server firewall for SMTP ports (587, 465)

**Admin Login Issues:**
- Check session configuration
- Verify CSRF token handling
- Clear browser cookies

**Permission Denied:**
- Check file permissions
- Ensure web server can read PHP files
- Check error logs

### Debug Mode:
Add to the top of any PHP file for debugging:
```php
error_reporting(E_ALL);
ini_set('display_errors', 1);
```

### Log Files:
Check your web server error logs for detailed error information.

## 9. URLs

After setup, access your application at:
- **Homepage:** `http://yoursite.com/php/`
- **Admin Login:** `http://yoursite.com/php/admin/login.php`
- **Admin Dashboard:** `http://yoursite.com/php/admin/`

## 10. Backup

Regular backups recommended:
- Database: `mysqldump -u username -p email_subscription_system > backup.sql`
- Files: Backup entire `php/` directory





  ✅ Admin Password Protection

  Authentication System (config/auth.php)

  - Secure Login: Password hashing with PHP's password_hash()
  - Session Management: 8-hour session timeout
  - CSRF Protection: Token validation on all forms

  Default Credentials:

  - Username: admin
  - Password: admin123

  Login Features:

  - Login Page: /admin/login.php with professional design
  - Session Security: Automatic timeout and regeneration
  - Logout: Clean session destruction
  - Protected APIs: All admin endpoints require authentication

  Access URLs:

  - Login: php/admin/login.php
  - Dashboard: php/admin/ (redirects to login if not authenticated)
  - Logout: php/admin/logout.php

  🛠 Setup Instructions

  1. Install PHPMailer:
  cd php/
  composer install
  2. Configure Email in config/email.php:
    - Update SMTP credentials
    - For Gmail: Use App Password (not regular password)
  3. Database Setup:
    - Import database.sql
    - Update config/database.php with your credentials
  4. Test the System:
    - Visit homepage to test subscription
    - Login to admin with admin/admin123
    - Send test campaign

  The system now has enterprise-level email sending capabilities and secure admin access!