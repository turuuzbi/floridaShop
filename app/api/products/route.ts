export const runtime = "nodejs";

import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { productName, productImage, price } = await req.json();

  const newProduct = await prisma.product.create({
    data: { productName, productImage, price },
  });

  return NextResponse.json(newProduct);
}

export async function GET() {
  const allProducts = await prisma.product.findMany({});
  return NextResponse.json(allProducts);
}

export async function DELETE(req: Request) {
  const body = await req.json().catch(() => null);

  const id = body?.id;
  if (!id || typeof id !== "string") {
    return NextResponse.json({ message: "id is required" }, { status: 400 });
  }

  try {
    const deletedProduct = await prisma.product.delete({
      where: { id },
    });
    return NextResponse.json(deletedProduct);
  } catch (e) {
    return NextResponse.json(
      { message: "product not found or already deleted" },
      { status: 404 },
    );
  }
}
