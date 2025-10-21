<?php
// Email configuration
define('SMTP_HOST', 'smtp.gmail.com'); // Change to your SMTP server
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'femalelawyersnetwork@gmail.com'); // Your SMTP username
define('SMTP_PASSWORD', 'zgmh yaji lyei xwse'); // Your SMTP password (use App Password for Gmail)
define('SMTP_ENCRYPTION', 'tls'); // tls or ssl

define('FROM_EMAIL', 'femalelawyersnetwork@gmail.com');
define('FROM_NAME', 'FLN Team');

// Include PHPMailer autoloader if available
if (file_exists(__DIR__ . '/../vendor/autoload.php')) {
    require_once __DIR__ . '/../vendor/autoload.php';
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

class EmailSender
{
    private $usePHPMailer;

    public function __construct()
    {
        // Check if PHPMailer is available
        $this->usePHPMailer = class_exists('PHPMailer\PHPMailer\PHPMailer');
    }

    public function sendCampaign($to, $subject, $content, $template = null)
    {
        if ($this->usePHPMailer) {
            return $this->sendWithPHPMailer($to, $subject, $content, $template);
        } else {
            return $this->sendWithPHPMail($to, $subject, $content, $template);
        }
    }

    private function sendWithPHPMail($to, $subject, $content, $template = null)
    {
        // For demo purposes, we'll simulate email sending
        // In production, uncomment the mail() function below

        $headers = [
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=UTF-8',
            'From: ' . FROM_NAME . ' <' . FROM_EMAIL . '>',
            'Reply-To: ' . FROM_EMAIL,
            'X-Mailer: PHP/' . phpversion()
        ];

        $htmlContent = $this->formatEmailContent($content, $to, $template);

        // Simulate email sending with a small delay
        usleep(100000); // 0.1 second delay

        // Uncomment this line for actual email sending:
        // return mail($to, $subject, $htmlContent, implode("\r\n", $headers));

        // For demo, always return true
        return true;
    }

    private function sendWithPHPMailer($to, $subject, $content, $template = null)
    {
        try {
            $mail = new PHPMailer(true);

            // Server settings
            $mail->isSMTP();
            $mail->Host       = SMTP_HOST;
            $mail->SMTPAuth   = true;
            $mail->Username   = SMTP_USERNAME;
            $mail->Password   = SMTP_PASSWORD;
            $mail->SMTPSecure = SMTP_ENCRYPTION;
            $mail->Port       = SMTP_PORT;

            // Recipients
            $mail->setFrom(FROM_EMAIL, FROM_NAME);
            $mail->addAddress($to);
            $mail->addReplyTo(FROM_EMAIL, FROM_NAME);

            // Content
            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body    = $this->formatEmailContent($content, $to, $template);
            $mail->AltBody = strip_tags($content);

            return $mail->send();
        } catch (Exception $e) {
            error_log("PHPMailer Error: {$mail->ErrorInfo}");
            throw new Exception("Failed to send email: {$mail->ErrorInfo}");
        }
    }

    private function formatEmailContent($content, $email, $template = null)
    {
        require_once __DIR__ . '/templates.php';

        $unsubscribeLink = $this->generateUnsubscribeLink($email);

        // If template is specified and exists, use template rendering
        if ($template && EmailTemplates::getTemplate($template)) {
            return EmailTemplates::renderTemplate(
                $template,
                '', // subject not needed for rendering
                $content,
                $email,
                FROM_EMAIL,
                FROM_NAME,
                $unsubscribeLink
            );
        }

        // Default template (original)
        return "
        <!DOCTYPE html>
        <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <title>Newsletter</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #3b82f6; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; background: #f9f9f9; }
                .footer { padding: 20px; text-align: center; font-size: 12px; color: #666; }
                .unsubscribe { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; }
                .unsubscribe a { color: #666; text-decoration: none; }
            </style>
        </head>
        <body>
            <div class='header'>
                <h1>Newsletter</h1>
            </div>
            <div class='content'>
                " . nl2br(htmlspecialchars($content)) . "
            </div>
            <div class='footer'>
                <div class='unsubscribe'>
                    <p>You received this email because you subscribed to our newsletter.</p>
                    <p><a href='{$unsubscribeLink}'>Unsubscribe</a> | <a href='#'>Update Preferences</a></p>
                </div>
            </div>
        </body>
        </html>
        ";
    }

    private function generateUnsubscribeLink($email)
    {
        $token = base64_encode($email . '|' . time());
        return 'http://' . $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF']) . '../unsubscribe.php?token=' . urlencode($token);
    }

    public function sendWelcomeEmail($email)
    {
        $subject = 'Welcome to our Newsletter!';
        $content = 'Thank you for subscribing to our newsletter. We\'re excited to have you on board!

We\'ll send you weekly updates with the latest news, tips, and exclusive content.

Stay tuned for amazing content!

Best regards,
The Newsletter Team';

        return $this->sendCampaign($email, $subject, $content);
    }
}