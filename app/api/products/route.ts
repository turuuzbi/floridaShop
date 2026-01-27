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
  const allProducts = await prisma.product.findMany();
  return NextResponse.json(allProducts);
}
