"use client";

import { useUser, SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

export default function AdminPage() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();
  const [showSignIn, setShowSignIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/v1/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to post product");
      const data = await res.json();
      console.log("Success:", data);
      toast.success("Success!");
      setFormData({
        name: "",
        price: "",
        description: "",
        imageUrl: "",
        category: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Error");
    }
  };

  useEffect(() => {
    if (!user && !isSignedIn) {
      setShowSignIn(true);
    } else if (user?.publicMetadata?.role !== "admin") {
      router.push("/");
    }
  }, [user, isSignedIn, router]);

  if (showSignIn) {
    return (
      <div className="flex items-center justify-center h-screen">
        <SignIn routing="hash" />
      </div>
    );
  }

  return (
    <>
      <div>
        <div className="ml-3 p-10">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <p>Welcome, {user?.firstName}!</p>
        </div>
        <div className="ml-5 p-5">
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="flex w-full flex-col gap-2"
          >
            <div className="flex items-center justify-between gap-4 px-4 border rounded-3xl bg-gray-100 ">
              <h4 className="text-sm font-semibold">+ Product Listing</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8">
                  <ChevronsUpDown />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent className="flex flex-col gap-2 ">
              <form
                action="/api/v1/products"
                method="post"
                className="flex flex-col gap-4 border rounded-3xl p-4 w-full"
                onSubmit={handleSubmit}
              >
                <input
                  name="name"
                  placeholder="Product Title"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  name="price"
                  placeholder="Price"
                  required
                  value={formData.price}
                  onChange={handleChange}
                />
                <textarea
                  name="description"
                  placeholder="Description..."
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                />
                <input
                  name="imageUrl"
                  placeholder="Insert Image [TODO]"
                  required
                  value={formData.imageUrl}
                  onChange={handleChange}
                />
                <select
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select category</option>
                  <option value="books">Books</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="toys">Toys</option>
                  <option value="misc">Misc</option>
                </select>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-black text-white py-2 px-4 rounded-4xl w-40 items-center"
                  >
                    Submit Product
                  </button>
                </div>
              </form>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        closeButton={false}
        pauseOnHover={false}
        draggable={false}
        theme="light"
      />
    </>
  );
}
