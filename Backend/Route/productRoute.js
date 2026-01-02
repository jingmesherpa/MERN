import { Router } from "express";
import { createProduct,  
    deleteProductController,  
    getAllProducts, 
    getSpecificProductController, 
    updateProductController } 
    from "../Controller/productController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { isAuthorized } from "../middleware/isAuthorized.js";

export const productRouter= Router()
productRouter.post('/create', 
    isAuthenticated, 
    isAuthorized(["admin"]), 
    createProduct);
productRouter.get('/get', getAllProducts);
productRouter.get('/get/:id', getSpecificProductController) // "/:" lai dynamic routing bhanincha
productRouter.patch("/update/:id", updateProductController)
productRouter.delete("/delete/:id", deleteProductController)