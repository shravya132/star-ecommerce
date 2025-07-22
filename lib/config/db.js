import mongoose from "mongoose";
import React from "react";

const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shravya132:Schan132@cluster0.dnigwnb.mongodb.net/starcommerce"
  );
  console.log("DB connected");
};

export default db;
