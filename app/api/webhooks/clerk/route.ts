import { Webhook } from "svix";
import { headers } from "next/headers";
import { prisma } from "@/lib/db";
import type { UserJSON, UserWebhookEvent } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  const secret = process.env.CLERK_WEBHOOK_SECRET;
  if (!secret) return new Response("Missing webhook secret", { status: 500 });

  const payload = await req.text();
  const h = await headers();

  const svix_id = h.get("svix-id");
  const svix_timestamp = h.get("svix-timestamp");
  const svix_signature = h.get("svix-signature");
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Missing svix headers", { status: 400 });
  }

  const wh = new Webhook(secret);

  let evt: UserWebhookEvent;
  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as UserWebhookEvent;
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }

  if (
    evt.type !== "user.created" &&
    evt.type !== "user.updated" &&
    evt.type !== "user.deleted"
  ) {
    return new Response(JSON.stringify({ ignored: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const user = evt.data as UserJSON;

  const email =
    user.email_addresses?.find((e) => e.id === user.primary_email_address_id)
      ?.email_address ??
    user.email_addresses?.[0]?.email_address ??
    null;

  const name =
    [user.first_name, user.last_name].filter(Boolean).join(" ") ||
    user.username ||
    "";

  const imageUrl = user.image_url || "/defaultPfp.jpg";
  const isAdmin = user.public_metadata?.isAdmin === true;
  const role = isAdmin ? "admin" : "user";

  try {
    if (evt.type === "user.deleted") {
      try {
        await prisma.user.delete({ where: { clerkId: user.id } });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        if (e?.code !== "P2025") console.error("Delete failed:", e);
      }
    } else {
      await prisma.user.upsert({
        where: { clerkId: user.id },
        update: { email, name, imageUrl, role },
        create: { clerkId: user.id, email, name, imageUrl, role },
      });
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Webhook DB error:", err);
    return new Response("Server error", { status: 500 });
  }
}
