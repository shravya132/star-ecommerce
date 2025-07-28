import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (!product) return <div className="p-4">Product not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      {product.imageUrl && (
        <div className="w-full h-96 bg-white rounded-xl overflow-hidden mb-6 flex items-center justify-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="object-contain h-full"
          />
        </div>
      )}
      <p className="text-2xl font-semibold text-green-700 mb-2">
        ${product.price}
      </p>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-sm text-gray-500 mt-4">Category: {product.category}</p>
    </div>
  );
}
