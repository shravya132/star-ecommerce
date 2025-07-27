import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    imageUrl: String,
    category: String,
  },
  { strict: true },
  { timestamps: true }
);

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default ProductModel;
