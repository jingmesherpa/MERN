import { Product } from "../Schema/productSchema.js";

// CREATE PRODUCT
export const createProduct = async (req, res) => {
    try {
        const data = req.body;
        const result = await Product.create(data);

        res.status(201).json({
            message: "Product created successfully",
            result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error creating product",
            error: error.message
        });
    }
};

// GET ALL PRODUCTS
export const getAllProducts = async (req, res) => {
    try {
        const result = await Product.find();

        res.status(200).json({
            message: "Products fetched successfully",
            data: result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error fetching products",
            error: error.message
        });
    }
};

// GET PRODUCT BY ID
export const getSpecificProductController = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Product.findById(id);

        res.status(200).json({
            message: "Specific product fetched successfully",
            data: result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error fetching product",
            error: error.message
        });
    }
};

// UPDATE PRODUCT
export const updateProductController = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;

        const result = await Product.findByIdAndUpdate(id, data, { new: true });

        res.status(200).json({
            message: "Product updated successfully",
            data: result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error updating product",
            error: error.message
        });
    }
};

// DELETE PRODUCT
export const deleteProductController = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Product.findByIdAndDelete(id);

        res.status(200).json({
            message: "Product deleted successfully",
            data: result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error deleting product",
            error: error.message
        });
    }
};
