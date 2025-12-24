import { User } from "../Schema/userSchema.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
import { generateToken, verifyToken } from "../utils/jwt.js";
import {sendEmail} from "../utils/nodemailer.js"

export const registerUser = async (req, res) => {
  try {
    let data = req.body;

    data = {
      ...data,
      password: await hashPassword(data.password),
    };

    const result = await User.create(data);

    const token = await generateToken({ payload:{
      id: result.id
    } , expiryTime : "1h"});

    sendEmail({
      email: result.email,
      subject: "Verify Your Email Address",
      html: `
      <h6>Hello ${result.username},</h6>  
      </br>
      <p>Thanks for registering an account with us! Please verify your account with us</p>
      <a href=http://localhost:1000/user/verify?token=${token}>
      <button style="border: none; background-color: blue; color: white; padding-top: 5px; padding-bottom: 5px; padding-right: 10px; padding-left:10px;">Verify</button>
      </a>
      `,
    }); // argument passes ram@gmail.com

    res.status(201).json({
      message: "User registered successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const verifyUser = async (req, res) => {
  try {
    let token = req.query.token;

    const verifiedToken = await verifyToken(token);

    const id = verifiedToken.id;

    const result = await User.findByIdAndUpdate(
      id,
      {
        isVerified: true,
      },
      { new: true }
    );

    res.status(200).json({
      message: "User verified successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      err: error.message,
    });
  }
};

export const loginUser =async(req, res)=>{
  try {
    const isValidEmail = await User.findOne({email:req.body.email})
    if (!isValidEmail){
      res.status(400).json({
        message:"Invalid credential"
      })
    }
    if (!isValidEmail.isVerified){
      res.status(400).json({
        message:" Please Verify your Account "

      })
    }
    const isValidPassword = await comparePassword({
          hashedpassword: isValidEmail.password,
          password: req.body.password,
        });
    
        if (!isValidPassword) {
          res.status(404).json({
            message: "Invalid Credential",
          });
        }
    
        const token = await generateToken({
          payload: {
            id: isValidEmail.id,
          },
          expiryTime: "30d",
        });
    
        res.status(200).json({
          message: "Login Successfull",
          data: isValidEmail,
          token: token,
        });
      } catch (error) {
        res.status(500).json({
          message: "Internal Server Error",
          error: error.message,
        });
      }
      };
export const forgetPassword = async(req, res)=>{
  try {
    let email=req.body.email;

    const isvalidEmail =await User.findOne({email: email})
    if (!isvalidEmail){
    res.status(400).json({
      message: "Account with this email does not exist"
    })
    }
    const token= await  generateToken({
      payload:{
        id: isvalidEmail.id,
        reason: "Reset Password"

      },
      expiryTime: "1h",
    })

    const result= await sendEmail({
      email: req.body.email,
      subject: "password reset link",
      html: `<p>Please request for reset Password</p> </br> <a href=http://localhost:1000/user/reset-password?token=${token}>
      http://localhost:1000/user/reset-password?token=${token}
      </a>`

    });
    res.status(200).json({
      message:"Password rest link to user",
      data: result
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
    
    
    
  }
}

export const resetPassword = async (req, res) => {
  try {
    const token = req.query.token;

    if (!token) {
      return res.status(400).json({ message: "Token is required" });
    }

    const verifiedToken = await verifyToken(token);

    if (verifiedToken.reason !== "Reset Password") {
      return res.status(401).json({
        message: "Invalid Token",
      });
    }

    const Id = verifiedToken.id;

    const newHashedPassword = await hashPassword(req.body.password);

    const result = await User.findByIdAndUpdate(
      Id,
      { password: newHashedPassword },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Password reset successfully",
      data: result,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
