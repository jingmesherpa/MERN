import { Router } from "express";
import { signup, login } from "../Controller/userController.js";

export const userRouter = Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
