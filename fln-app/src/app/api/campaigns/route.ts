import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// GET all campaigns
export async function GET() {
  try {
    const campaigns = await prisma.campaign.findMany({
      orderBy: { sentAt: "desc" },
    });

    return NextResponse.json({ campaigns });
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    return NextResponse.json(
      { error: "Failed to fetch campaigns" },
      { status: 500 }
    );
  }
}
