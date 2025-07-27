"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export default function EditProductDialog({
  open,
  setOpen,
  product,
  onUpdate,
}) {
  const [formData, setFormData] = useState(product || {});

  useEffect(() => {
    setFormData(product || {});
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/v1/products/${formData._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const updated = await res.json();
        onUpdate(updated);
        setOpen(false);
      }
    } catch (err) {
      console.error("Failed to update product", err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>
        {formData && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              <Input
                name="price"
                type="number"
                value={formData.price || ""}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input
                name="description"
                type="string"
                value={formData.description || ""}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <select
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Select category</option>
                <option value="Books">Books</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Toys">Toys</option>
                <option value="Misc">Misc</option>
              </select>
            </div>
            <Button type="submit" className="mt-4">
              Save Changes
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
