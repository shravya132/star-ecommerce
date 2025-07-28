import { connectDB } from "@/lib/config/db";
import ProductModel from "@/lib/models/product.model";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  await connectDB();
  const product = await ProductModel.findById(params.id).lean();
  if (!product) {
    return { title: "Product Not Found" };
  }
  return { title: product.name };
}

export default async function ProductDetailsPage({ params }) {
  await connectDB();

  const product = await ProductModel.findById(params.id).lean();

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full max-h-96 object-contain mb-6"
        />
      )}
      <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
      <p className="text-lg">{product.description}</p>
    </main>
  );
}
