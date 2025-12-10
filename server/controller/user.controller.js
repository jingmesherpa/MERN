import { User } from "../schema/user.schema.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export const createusercontroller= async (req,res) => {
    try{
        let data= req.body
        let hashedPassword= await bcrypt.hash(data.password, 10)
        data ={
            ...data,
            password: hashedPassword,
            
        }//rest operator
        const result = await User.create(data)
        res.status(201).json({
            message:"user registered succesussfully",
            result: result
        })

    }catch (error){
        console.log(error);
    }
}
export const getAllusercontroller = async(req,res) => {
    try {
        const result=await User.find()
        res.status(200).json({
            sms:'USER FETECH SUCCESSFULL',
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message:"User fetched unsucessful",
            error:error.message
        })
        
    }
}
export const updateUserController=async(req,res)=>{
     try {
            let id =req.params.id
            let data= req.body
            const result= await User.findByIdAndUpdate(id, data, {new:true})
            res.status(200).json({
                message:"User update successfully",
                data:result
    
            }
            )
        } catch (error) {
            res.status(500).json({
                message: "error fetching user",
                error: error.message
            })
 }
    
}
export const getSpecificUser = async(req,res) => {
    try {
        let id = req.params.id;
        console.log(id);
        const result=await User.findById(id)
        res.status(200).json({
            message:"Specific user fetched",
            data: result
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Error fetching User",
            error: error.message
        })
    }
}
export const loginUserController = async(req,res)=>{
    try {
        
        const result = await User.findOne({email:req.body.email})

        if (!result){
            res.status(400).json({
                message:"Invalid Passwords"
            })
        }
        const isValidPassword= await bcrypt.compare(req.body.password, result.password)
        if(!isValidPassword){
            res.status(400).json({
                message:"Invalid Passwords",
                
            })
        }
        let infoObj ={
            id : result._id,
            email : result.email
        }

        let secretKey = "secret";

        const token = jwt.sign(infoObj, secretKey, {expiresIn:"1h"} )
        console.log(token
            
        );
        res.status(200).json({
            message:'Login success',
            data: result
        })
        

    } catch (error) {
        res.status(500).json({
            message:"Internal server error",
            error : error.message
        })
        
    }
}
export const deleteUserController= async (req,res) =>{
    try {
        let id= req.params.id
        const result= await User.findByIdAndDelete(id)
        res.status(200).json({
            message:"User deleted ",
            data:result
        })
    } catch (error) {
        
    }
};