import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// GET all subscribers
export async function GET() {
  try {
    const subscribers = await prisma.subscriber.findMany({
      orderBy: { subscribedAt: "desc" },
    });

    const total = subscribers.length;
    const active = subscribers.filter((s) => s.status === "active").length;

    return NextResponse.json({
      subscribers,
      total,
      active,
    });
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    return NextResponse.json(
      { error: "Failed to fetch subscribers" },
      { status: 500 }
    );
  }
}

// POST new subscriber
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
      return NextResponse.json(
        { error: "Email already subscribed" },
        { status: 400 }
      );
    }

    const subscriber = await prisma.subscriber.create({
      data: {
        email,
        status: "active",
      },
    });

    return NextResponse.json({ subscriber }, { status: 201 });
  } catch (error) {
    console.error("Error adding subscriber:", error);
    return NextResponse.json(
      { error: "Failed to add subscriber" },
      { status: 500 }
    );
  }
}
