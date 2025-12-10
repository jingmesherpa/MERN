import { Router } from "express";
import { createproduct, deleteProductController, getAllProducts, getSpecificProductController, updateProductController } from "../controller/product.controller.js";

export const productRouter= Router()
productRouter.post('/create', createproduct);
productRouter.get('/get', getAllProducts);
productRouter.get('/get/:id', getSpecificProductController) // "/:" lai dynamic routing bhanincha
productRouter.patch("/update/:id", updateProductController)
productRouter.delete("/delete/:id", deleteProductController)