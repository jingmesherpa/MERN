import mongoose from "mongoose";

export const connectDB= async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/mern")
        console.log(`database connected successfully`);
        
    } catch (error) {
        console.log(error);
        
    }
}