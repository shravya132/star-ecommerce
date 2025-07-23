import { NextResponse } from "next/server";
import { connectDB } from "@/lib/config/db";
import ProductModel from "@/lib/models/product.model";

export async function GET() {
  await connectDB();
  const products = await ProductModel.find();
  return NextResponse.json(products);
}

export async function POST(request) {
  await connectDB();
  const body = await request.json();
  const newProduct = await ProductModel.create(body);
  return NextResponse.json(newProduct, { status: 201 });
}
