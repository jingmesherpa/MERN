import { Router } from "express";
import { createusercontroller, deleteUserController, getAllusercontroller, getSpecificUser, loginUserController, updateUserController } from "../controller/user.controller.js";

export const userRouter= Router();
userRouter.post('/create', createusercontroller)
userRouter.get("/get", getAllusercontroller)
userRouter.get("/get/:id", getSpecificUser)
userRouter.patch("/update/:id", updateUserController)
userRouter.delete('/delete/:id', deleteUserController)
userRouter.post('/login', loginUserController)
