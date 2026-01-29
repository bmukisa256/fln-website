# Email Subscription System - PHP Version

A complete email subscription system built with PHP, featuring a modern UI and database-driven functionality.

## Features

- **Modern Landing Page**: Responsive subscription form with Tailwind CSS styling
- **Database Integration**: MySQL/MariaDB for persistent data storage
- **Admin Dashboard**: Complete management interface for subscribers and campaigns
- **Email Campaigns**: Send newsletters to all active subscribers
- **Subscriber Management**: Add, view, and remove subscribers
- **Campaign History**: Track all sent campaigns with metrics
- **Email Templates**: HTML email templates with unsubscribe links
- **CSRF Protection**: Security against cross-site request forgery
- **AJAX Interface**: Smooth user experience without page reloads

## Technology Stack

- **Backend**: PHP 7.4+ with PDO
- **Database**: MySQL/MariaDB
- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript
- **Email**: PHP mail() function (easily extendable to PHPMailer)

## Installation

### 1. Prerequisites
- PHP 7.4 or higher
- MySQL/MariaDB server
- Web server (Apache/Nginx) or XAMPP/WAMP

### 2. Database Setup
1. Create a MySQL database
2. Import the database schema:
   ```bash
   mysql -u username -p database_name < database.sql
   ```

### 3. Configuration
1. Edit `config/database.php` with your database credentials:
   ```php
   define('DB_HOST', 'localhost');
   define('DB_USER', 'your_username');
   define('DB_PASS', 'your_password');
   define('DB_NAME', 'email_subscription_system');
   ```

2. Edit `config/email.php` for email settings:
   ```php
   define('FROM_EMAIL', 'your-email@domain.com');
   define('FROM_NAME', 'Your Newsletter');
   ```

### 4. File Permissions
Ensure the web server has read access to all PHP files.

## File Structure

```
php/
├── config/
│   ├── database.php     # Database configuration
│   └── email.php        # Email settings and sender class
├── includes/
│   ├── header.php       # HTML header template
│   ├── footer.php       # HTML footer template
│   └── functions.php    # Core functionality classes
├── api/
│   ├── subscribe.php    # Handle subscription requests
│   ├── send-campaign.php # Send email campaigns
│   └── delete-subscriber.php # Remove subscribers
├── admin/
│   └── index.php        # Admin dashboard
├── index.php            # Main landing page
├── unsubscribe.php      # Unsubscribe page
├── database.sql         # Database schema
└── README.md           # This file
```

## Usage

### For Visitors
1. Visit the homepage
2. Enter email address in the subscription form
3. Receive confirmation message

### For Administrators
1. Access `/admin/` directory
2. View subscriber statistics
3. Compose and send email campaigns
4. Manage subscriber list
5. Review campaign history

## API Endpoints

- `POST /api/subscribe.php` - Add new subscriber
- `POST /api/send-campaign.php` - Send email campaign
- `POST /api/delete-subscriber.php` - Remove subscriber

## Security Features

- CSRF token validation on all forms
- SQL injection prevention with prepared statements
- Input sanitization and validation
- Email validation
- Secure session management

## Email Functionality

The system includes:
- HTML email templates
- Automatic unsubscribe links
- Email formatting and styling
- Error handling for failed sends
- Campaign tracking

### Extending Email Functionality

To use PHPMailer for advanced email features:

1. Install PHPMailer via Composer:
   ```bash
   composer require phpmailer/phpmailer
   ```

2. Update `config/email.php` with SMTP settings
3. The EmailSender class will automatically detect and use PHPMailer

## Database Schema

### Subscribers Table
- `id` - Primary key
- `email` - Subscriber email (unique)
- `subscribed_at` - Subscription timestamp
- `status` - active/unsubscribed
- `created_at` - Record creation time
- `updated_at` - Last update time

### Campaigns Table
- `id` - Primary key
- `subject` - Email subject line
- `content` - Email content
- `sent_at` - Send timestamp
- `recipient_count` - Number of recipients
- `created_at` - Record creation time

## Customization

### Styling
- Modify Tailwind CSS classes in templates
- Add custom CSS in the `<style>` sections
- Update color scheme in `includes/header.php`

### Email Templates
- Customize HTML templates in `config/email.php`
- Add your branding and styling
- Modify unsubscribe link format

### Functionality
- Extend the `SubscriberManager` class for additional features
- Add new API endpoints for additional functionality
- Implement additional validation rules

## Production Considerations

1. **Email Service**: Integrate with a professional email service (SendGrid, Mailgun, etc.)
2. **SSL Certificate**: Ensure HTTPS for security
3. **Rate Limiting**: Implement rate limiting on subscription forms
4. **Backup Strategy**: Regular database backups
5. **Monitoring**: Set up email delivery monitoring
6. **Authentication**: Add admin authentication
7. **Logging**: Implement comprehensive error logging

## Troubleshooting

### Common Issues

1. **Database Connection Errors**
   - Check database credentials in `config/database.php`
   - Ensure MySQL server is running
   - Verify database exists

2. **Email Not Sending**
   - Check PHP mail configuration
   - Verify SMTP settings if using external server
   - Check server mail logs

3. **Permission Errors**
   - Ensure proper file permissions
   - Check web server error logs

### Debug Mode
To enable debug mode, add error reporting to the top of PHP files:
```php
error_reporting(E_ALL);
ini_set('display_errors', 1);
```

## License

MIT License - see original project for details.