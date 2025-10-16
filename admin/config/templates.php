<?php
// Email Templates Configuration

class EmailTemplates {
    
    public static function getTemplates() {
        return [
            'newsletter' => [
                'name' => 'Newsletter Template',
                'description' => 'Clean and modern newsletter design with header image and structured content',
                'subject_placeholder' => 'Weekly Newsletter - [Date]',
                'content_placeholder' => "Dear Subscriber,

Welcome to our weekly newsletter! Here's what's happening this week:

## Featured Article
[Write your main article or announcement here]

## Quick Updates
• Update 1: Brief description
• Update 2: Brief description  
• Update 3: Brief description

## Upcoming Events
📅 Event Name - Date & Time
📅 Event Name - Date & Time

We hope you find this content valuable. Don't forget to follow us on social media!

Best regards,
The Newsletter Team",
                'html_template' => '
                <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <!-- Header -->
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
                        <h1 style="margin: 0; font-size: 28px; font-weight: bold;">{{FROM_NAME}}</h1>
                        <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Newsletter</p>
                    </div>
                    
                    <!-- Content -->
                    <div style="background: white; padding: 30px 20px; border: 1px solid #e1e5e9; border-top: none;">
                        <div style="margin-bottom: 30px;">
                            {{CONTENT}}
                        </div>
                    </div>
                    
                    <!-- Footer -->
                    <div style="background: #f8f9fa; padding: 30px 20px; text-align: center; border: 1px solid #e1e5e9; border-top: none; border-radius: 0 0 8px 8px;">
                        <div style="margin-bottom: 20px;">
                            <a href="#" style="display: inline-block; margin: 0 10px; color: #667eea; text-decoration: none;">Facebook</a>
                            <a href="#" style="display: inline-block; margin: 0 10px; color: #667eea; text-decoration: none;">Twitter</a>
                            <a href="#" style="display: inline-block; margin: 0 10px; color: #667eea; text-decoration: none;">LinkedIn</a>
                        </div>
                        <p style="margin: 0; font-size: 12px; color: #666; line-height: 1.4;">
                            You received this email because you subscribed to our newsletter.<br>
                            <a href="{{UNSUBSCRIBE_LINK}}" style="color: #666; text-decoration: none;">Unsubscribe</a> | 
                            <a href="#" style="color: #666; text-decoration: none;">Update Preferences</a>
                        </p>
                    </div>
                </div>'
            ],
            
            'promotion' => [
                'name' => 'Promotional Template',
                'description' => 'Eye-catching promotional design with call-to-action buttons and special offers',
                'subject_placeholder' => '🔥 Special Offer Inside - Limited Time!',
                'content_placeholder' => "🎉 SPECIAL OFFER JUST FOR YOU! 🎉

We're excited to offer you an exclusive deal that's too good to miss!

## 🏷️ What's the Deal?
[Describe your special offer, discount, or promotion here]

## ⏰ Limited Time Offer
This special pricing is only available until [End Date]. Don't wait - this offer won't last long!

## 🎯 Why Choose Us?
✅ High-quality products/services
✅ Excellent customer support  
✅ Fast delivery/implementation
✅ 100% satisfaction guarantee

Ready to take advantage of this amazing offer?

👆 CLAIM YOUR OFFER NOW 👆

Questions? Reply to this email and we'll get back to you within 24 hours.

Happy shopping!
The Sales Team",
                'html_template' => '
                <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333; background: white;">
                    <!-- Header -->
                    <div style="background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); color: white; padding: 25px 20px; text-align: center;">
                        <h1 style="margin: 0; font-size: 32px; font-weight: bold;">🔥 SPECIAL OFFER!</h1>
                        <p style="margin: 10px 0 0 0; font-size: 18px; font-weight: 500;">Limited Time Only</p>
                    </div>
                    
                    <!-- Offer Badge -->
                    <div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px 20px; margin: 0;">
                        <p style="margin: 0; font-weight: bold; color: #856404; text-align: center;">
                            ⚡ Exclusive Subscriber Deal - Act Fast! ⚡
                        </p>
                    </div>
                    
                    <!-- Content -->
                    <div style="padding: 30px 20px; border: 1px solid #e1e5e9; border-top: none;">
                        <div style="margin-bottom: 30px; text-align: center;">
                            {{CONTENT}}
                        </div>
                        
                        <!-- CTA Button -->
                        <div style="text-align: center; margin: 30px 0;">
                            <a href="#" style="display: inline-block; background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); color: white; padding: 15px 35px; text-decoration: none; border-radius: 25px; font-weight: bold; font-size: 18px; box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);">
                                🛒 CLAIM OFFER NOW
                            </a>
                        </div>
                    </div>
                    
                    <!-- Footer -->
                    <div style="background: #f8f9fa; padding: 25px 20px; text-align: center; border: 1px solid #e1e5e9; border-top: none;">
                        <p style="margin: 0 0 15px 0; font-size: 14px; color: #666;">
                            Questions? Contact us at <a href="mailto:{{FROM_EMAIL}}" style="color: #ff6b6b;">{{FROM_EMAIL}}</a>
                        </p>
                        <p style="margin: 0; font-size: 12px; color: #666; line-height: 1.4;">
                            You received this promotional email because you subscribed to our newsletter.<br>
                            <a href="{{UNSUBSCRIBE_LINK}}" style="color: #666; text-decoration: none;">Unsubscribe</a> | 
                            <a href="#" style="color: #666; text-decoration: none;">Update Preferences</a>
                        </p>
                    </div>
                </div>'
            ]
        ];
    }
    
    public static function getTemplate($templateId) {
        $templates = self::getTemplates();
        return isset($templates[$templateId]) ? $templates[$templateId] : null;
    }
    
    public static function renderTemplate($templateId, $subject, $content, $email, $fromEmail, $fromName, $unsubscribeLink) {
        $template = self::getTemplate($templateId);
        if (!$template) {
            return null;
        }
        
        $htmlContent = $template['html_template'];
        
        // Replace placeholders
        $htmlContent = str_replace('{{CONTENT}}', nl2br(htmlspecialchars($content)), $htmlContent);
        $htmlContent = str_replace('{{FROM_EMAIL}}', $fromEmail, $htmlContent);
        $htmlContent = str_replace('{{FROM_NAME}}', $fromName, $htmlContent);
        $htmlContent = str_replace('{{UNSUBSCRIBE_LINK}}', $unsubscribeLink, $htmlContent);
        
        return $htmlContent;
    }
}
?>