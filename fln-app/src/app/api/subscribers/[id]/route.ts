import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// DELETE subscriber by ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const subscriberId = parseInt(id);

    if (isNaN(subscriberId)) {
      return NextResponse.json(
        { error: "Invalid subscriber ID" },
        { status: 400 }
      );
    }

    // Check if subscriber exists
    const existing = await prisma.subscriber.findUnique({
      where: { id: subscriberId },
    });

    if (!existing) {
      return NextResponse.json(
        { error: "Subscriber not found" },
        { status: 404 }
      );
    }

    await prisma.subscriber.delete({
      where: { id: subscriberId },
    });

    return NextResponse.json({ message: "Subscriber deleted successfully" });
  } catch (error) {
    console.error("Error deleting subscriber:", error);
    return NextResponse.json(
      { error: "Failed to delete subscriber" },
      { status: 500 }
    );
  }
}

// PATCH update subscriber status
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const subscriberId = parseInt(id);
    const body = await request.json();
    const { status } = body;

    if (isNaN(subscriberId)) {
      return NextResponse.json(
        { error: "Invalid subscriber ID" },
        { status: 400 }
      );
    }

    if (!status || !["active", "inactive", "unsubscribed"].includes(status)) {
      return NextResponse.json(
        { error: "Valid status is required (active, inactive, unsubscribed)" },
        { status: 400 }
      );
    }

    const subscriber = await prisma.subscriber.update({
      where: { id: subscriberId },
      data: { status },
    });

    return NextResponse.json({ subscriber });
  } catch (error) {
    console.error("Error updating subscriber:", error);
    return NextResponse.json(
      { error: "Failed to update subscriber" },
      { status: 500 }
    );
  }
}
