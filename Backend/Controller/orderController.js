import { Order } from "../Schema/orderSchema.js";
import { Product } from "../Schema/productSchema.js";

export const createOrder = async (req, res) => {
    try {
        let data = req.body
        const order = await Order.create(data)
        let orderQuantity = data.orderQuantity
        const id = data.productID
        // 1. Find product
        const product = await Product.findById(productId);
        
        if (!product) {
           return res.status(404).json({
    message: "Product not found with id: " + productId
  });
}

// 2. Check quantity
        if (product.quantity < orderQuantity) {
          return res.status(400).json({
          message: "Not enough product quantity"
  });
}

// 3. Update product quantity
        const updatedProduct = await Product.findByIdAndUpdate(
  
      { quantity: product.quantity - orderQuantity },
      { new: true }
);

      console.log(updatedProduct);

       
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error creating order",
            error: error.message
        });
    }
};

export const getAllOrders = async (req, res) => {
    try {
        const result = await Order.find();

        res.status(200).json({
            message: "Orders fetched successfully",
            data: result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error fetching orders",
            error: error.message
        });
    }
};

export const getSpecificOrderController = async (req, res) => {
    try {
        let id = req.params.id;

        const result = await Order.findById(id);

        res.status(200).json({
            message: "Specific order fetched successfully",
            data: result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error fetching order",
            error: error.message
        });
    }
};

export const updateOrderController = async (req, res) => {
    try {
        let id = req.params.id;
        let data = req.body;

        const result = await Order.findByIdAndUpdate(id, data, { new: true });

        res.status(200).json({
            message: "Order updated successfully",
            data: result
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error updating order",
            error: error.message
        });
    }
};

export const deleteOrderController = async (req, res) => {
    try {
        let id = req.params.id;

        const result = await Order.findByIdAndDelete(id);

        res.status(200).json({
            message: "Order deleted successfully",
            data: result
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error deleting order",
            error: error.message
        });
    }
};
