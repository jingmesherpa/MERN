import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
  productName: {
    type: "string",
    required: true,
    trim: true
  },
  price: {
    type: "number",
    required: true,
    min: 0
  },
  quantity: {
    type: "number",
    required: true,
    min: 0
  },
  description: {
    type: "string",
    default: ""
  },
  image: {
    type: "string",
    required: false
  }
});
export const Product = mongoose.model("Product", productSchema)
