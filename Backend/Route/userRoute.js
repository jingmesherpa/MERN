import { Router } from "express";
import { forgetPassword, loginUser, registerUser, resetPassword, updateUser, verifyUser } from "../Controller/userController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

export const userRouter = Router();


userRouter.post("/register", registerUser);
userRouter.get("/verify", verifyUser)
userRouter.post("/login", loginUser)
userRouter.get("/forget-password", forgetPassword)
userRouter.patch("/reset-password", resetPassword)

userRouter.patch("/update-user", isAuthenticated, updateUser)