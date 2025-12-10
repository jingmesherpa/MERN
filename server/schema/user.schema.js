import mongoose from "mongoose";

const usershema= new mongoose.Schema({
    username:{
        type: String,
        required:[true,"username must be sent"]
    },
    email:{
        type: String,
        required: [true,"email must be sent"],
        unique:[true,"email must be unique"]
    },
    password:{
        type: String,
        required: [true," password must be sent"]

    },
    gender:{
        type: String,
        required: false
    },
    phonenumber:{
        type: Number,
        required: [true,"phnumber must be sent"]
    }  
});

export const User= mongoose.model('User', usershema)