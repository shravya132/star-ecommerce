"use client";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/v1/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products");
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 my-6 mt-10">
        {["All", "Electronics", "Clothing", "Toys", "Books", "Misc"].map(
          (selectedCategory) => (
            <button
              key={selectedCategory}
              onClick={() => setCategory(selectedCategory)}
              className={`py-1 px-4 rounded-sm ${
                category === selectedCategory
                  ? "bg-black text-white"
                  : "bg-gray-100"
              }`}
            >
              {selectedCategory}
            </button>
          )
        )}
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 mt-15">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
            description={product.description}
            category={product.category}
          />
        ))}
      </div>
    </>
  );
}

export default ProductList;
