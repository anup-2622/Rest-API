require("dotenv").config();
const express = require("express");
const app = express();
const products_routes = require("./routes/products");
const PORT = process.env.PORT || 5000;
// const connectDB = require("./db/connect");
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("Hello E-com API");
});

app.use("/api/products", products_routes);

const connectDB = (uri) => {
  console.log("db connected");
  mongoose.connect(uri);
};

const startServer = async () => {
  try {
    await connectDB(process.env.MONOGDB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} Server is running`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

// ZH8p85izrY8qT33V;
