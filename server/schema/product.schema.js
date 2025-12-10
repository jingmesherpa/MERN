import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true,"Product name is requireed"]
    },
    description:{
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: [true,"Product price is required"]
    },
    category:{
        type: String,
        required:[true,"product catagory is required"]
    },
    
}, {timestamps: true});
export const Product= mongoose.model("Product", productSchema)
