import { Router } from "express";
import { forgetPassword, loginUser, registerUser, resetPassword, verifyUser } from "../Controller/userController.js";

export const userRouter = Router();


userRouter.post("/register", registerUser);
userRouter.get("/verify", verifyUser)
userRouter.post("/login", loginUser)
userRouter.get("/forget-password", forgetPassword)
userRouter.patch("/reset-password", resetPassword)