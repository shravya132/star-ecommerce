import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import ProductModel from "@/lib/models/product.model";

export async function GET(_, { params }) {
  try {
    await connectDB();
    const product = await ProductModel.findById(params.id);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json(product);
  } catch (error) {
    console.error("GET /products/:id error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PATCH(request, { params }) {
  try {
    await connectDB();
    const body = await request.json();
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      params.id,
      body,
      {
        new: true,
      }
    );
    if (!updatedProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error("PATCH /products/:id error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(_, { params }) {
  try {
    await connectDB();
    const product = await ProductModel.findById(params.id);
    if (!product) {
      return NextResponse.json(
        { error: "Product doesn't exist" },
        { status: 404 }
      );
    }
    await ProductModel.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Product deleted" });
  } catch (error) {
    console.error("DELETE /products/:id error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
