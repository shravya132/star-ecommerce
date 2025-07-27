"use client";
import ProductList from "@/components/ProductList";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <div className="flex justify-center mt-5 p-2">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
          className="w-5xl border rounded-3xl bg-gray-50 p-3"
        />
      </div>
      <ProductList query={query} />
    </>
  );
}
