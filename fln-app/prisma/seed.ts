import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create admin user
  const hashedPassword = await bcrypt.hash("admin123", 10);

  const admin = await prisma.admin.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      username: "admin",
      password: hashedPassword,
      email: "admin@fln.ug",
    },
  });

  console.log("Created admin user:", admin.username);

  // Create some sample subscribers for testing
  const sampleSubscribers = [
    { email: "jane.doe@example.com", status: "active" },
    { email: "mary.smith@example.com", status: "active" },
    { email: "sarah.johnson@example.com", status: "active" },
  ];

  for (const sub of sampleSubscribers) {
    await prisma.subscriber.upsert({
      where: { email: sub.email },
      update: {},
      create: sub,
    });
  }

  console.log("Created sample subscribers");
  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
