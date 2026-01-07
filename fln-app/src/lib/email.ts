// Email service configuration
// Using Resend for production or console logging for development

interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
}

interface SendResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

class EmailService {
  private apiKey: string | undefined;
  private fromEmail: string;

  constructor() {
    this.apiKey = process.env.RESEND_API_KEY;
    this.fromEmail = process.env.EMAIL_FROM || "FLN Uganda <noreply@fln.ug>";
  }

  async send(options: EmailOptions): Promise<SendResult> {
    const recipients = Array.isArray(options.to) ? options.to : [options.to];

    // If no API key, log to console (development mode)
    if (!this.apiKey) {
      console.log("=== EMAIL SERVICE (DEV MODE) ===");
      console.log(`From: ${this.fromEmail}`);
      console.log(`To: ${recipients.join(", ")}`);
      console.log(`Subject: ${options.subject}`);
      console.log(`Content Preview: ${options.html.substring(0, 200)}...`);
      console.log("================================");

      return {
        success: true,
        messageId: `dev-${Date.now()}`,
      };
    }

    // Production: Use Resend API
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          from: this.fromEmail,
          to: recipients,
          subject: options.subject,
          html: options.html,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send email");
      }

      const data = await response.json();
      return {
        success: true,
        messageId: data.id,
      };
    } catch (error) {
      console.error("Email send error:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async sendBatch(
    emails: Array<{ to: string; subject: string; html: string }>
  ): Promise<{ sent: number; failed: number; errors: string[] }> {
    let sent = 0;
    let failed = 0;
    const errors: string[] = [];

    for (const email of emails) {
      const result = await this.send(email);
      if (result.success) {
        sent++;
      } else {
        failed++;
        if (result.error) {
          errors.push(`${email.to}: ${result.error}`);
        }
      }
    }

    return { sent, failed, errors };
  }
}

export const emailService = new EmailService();

// Email template helpers
export function createCampaignEmail(content: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FLN Newsletter</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
    }
    .header {
      background: linear-gradient(135deg, #1a1a3e 0%, #4a1a6b 100%);
      padding: 30px 20px;
      text-align: center;
    }
    .header img {
      max-width: 120px;
      height: auto;
    }
    .content {
      padding: 30px 20px;
    }
    .footer {
      background-color: #1a1a3e;
      color: #ffffff;
      padding: 20px;
      text-align: center;
      font-size: 12px;
    }
    .footer a {
      color: #d4a843;
      text-decoration: none;
    }
    .unsubscribe {
      margin-top: 15px;
      color: #888;
    }
    .unsubscribe a {
      color: #888;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="color: #d4a843; margin: 0; font-size: 24px;">Female Lawyers Network</h1>
      <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 14px;">Uganda</p>
    </div>
    <div class="content">
      ${content}
    </div>
    <div class="footer">
      <p>Female Lawyers Network Uganda</p>
      <p>Plot 6 Kyaddondo Road, Kampala</p>
      <p><a href="mailto:info@fln.ug">info@fln.ug</a></p>
      <p class="unsubscribe">
        <a href="${process.env.NEXTAUTH_URL || "http://localhost:3000"}/unsubscribe">Unsubscribe from this list</a>
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}
