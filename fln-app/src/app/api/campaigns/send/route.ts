import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { emailService, createCampaignEmail } from "@/lib/email";

// POST send campaign
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { subject, content } = body;

    if (!subject || !content) {
      return NextResponse.json(
        { error: "Subject and content are required" },
        { status: 400 }
      );
    }

    // Get all active subscribers
    const subscribers = await prisma.subscriber.findMany({
      where: { status: "active" },
    });

    if (subscribers.length === 0) {
      return NextResponse.json(
        { error: "No active subscribers to send to" },
        { status: 400 }
      );
    }

    // Create HTML email from content
    const htmlContent = createCampaignEmail(content);

    // Send emails to all subscribers
    const emails = subscribers.map((subscriber) => ({
      to: subscriber.email,
      subject,
      html: htmlContent,
    }));

    const result = await emailService.sendBatch(emails);

    // Record the campaign
    const campaign = await prisma.campaign.create({
      data: {
        subject,
        content,
        recipientCount: result.sent,
        sentAt: new Date(),
      },
    });

    return NextResponse.json(
      {
        message: `Campaign sent to ${result.sent} subscribers`,
        campaign,
        sent: result.sent,
        failed: result.failed,
        errors: result.errors.length > 0 ? result.errors : undefined,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error sending campaign:", error);
    return NextResponse.json(
      { error: "Failed to send campaign" },
      { status: 500 }
    );
  }
}
