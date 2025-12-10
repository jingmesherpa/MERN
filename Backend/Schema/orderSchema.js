import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    userInfo:{
        fullName:{
            type: String,
            required:[true, "Full name required"]

        },
        email:{
            type:String,
            required: true
        },
        address:{
            type:String,
            required: true
        },
        city:{
            type:String,
            required: true
        },
        phone:{
            type:Number,
            required: true
        }

    },
    status:{
      type: String,
      enum:["ongoing","delivering", "completed"],
      default: "ongoing"
    }
  },
  { timestamps: true }
); 

export const Order = mongoose.model("Order", orderSchema);


