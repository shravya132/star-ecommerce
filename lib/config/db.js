import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shravya132:Schan132@starcommerce.t4hmuss.mongodb.net/starcommerce"
  );
  console.log("DB connected");
};
