const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be provided"],
  },
  price: {
    type: Number,
    required: [true, "Price must be provided"],
  },
  feature: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    // required: [true, "Company name should be valid or required"],
    enum: {
      values: ["Apple", "Sumsung", "Mi", "Oneplus", "oppo", "Vivo"],
      message: `{VALUE} not supported`,
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
