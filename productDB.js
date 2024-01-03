require("dotenv").config();
// const connectDB = require("./db/connect");
const mongoose = require("mongoose");

const Product = require("./models/product");
const product_json = require("./product.json");

const connectDB = (uri) => {
  mongoose.connect(uri);
  console.log("db connected");
};

const start = async () => {
  try {
    await connectDB(process.env.MONOGDB_URL);
    // await Product.create(product_json);
    // console.log("success");
  } catch (error) {
    console.log(error);
  }
};
start();
