export const runtime = "nodejs";

import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AdminPanel from "./AdminPanel";

export default async function Page() {
  const { userId } = await auth();

  if (!userId) redirect("/");

  const dbUser = await prisma.user.findUnique({
    where: { clerkId: userId },
    select: { role: true },
  });

  if (!dbUser || dbUser.role !== "ADMIN") {
    redirect("/"); // or "/403"
  }

  return <AdminPanel />;
}
