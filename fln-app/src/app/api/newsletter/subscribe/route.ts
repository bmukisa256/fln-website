import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { emailService, createCampaignEmail } from "@/lib/email";

// POST subscribe to newsletter
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Check if already exists
    const existing = await prisma.subscriber.findUnique({
      where: { email },
    });

    if (existing) {
      if (existing.status === "active") {
        return NextResponse.json(
          { error: "Email is already subscribed" },
          { status: 400 }
        );
      }
      // Reactivate if unsubscribed
      await prisma.subscriber.update({
        where: { email },
        data: { status: "active" },
      });
    } else {
      // Create new subscriber
      await prisma.subscriber.create({
        data: {
          email,
          status: "active",
        },
      });
    }

    // Send welcome email
    const welcomeContent = `
      <h2>Welcome to FLN Newsletter!</h2>
      <p>Thank you for subscribing to the Female Lawyers Network Uganda newsletter.</p>
      <p>You'll now receive updates about:</p>
      <ul>
        <li>Upcoming events and conferences</li>
        <li>Professional development opportunities</li>
        <li>Network news and announcements</li>
        <li>Legal insights and resources</li>
      </ul>
      <p>We're excited to have you as part of our community!</p>
      <p>Best regards,<br>The FLN Team</p>
    `;

    await emailService.send({
      to: email,
      subject: "Welcome to FLN Newsletter",
      html: createCampaignEmail(welcomeContent),
    });

    return NextResponse.json(
      { message: "Successfully subscribed to newsletter" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
