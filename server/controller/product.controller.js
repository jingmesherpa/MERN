import { Product } from "../schema/product.schema.js";
export const createproduct = async(req,res) =>{
    try {
        const data= req.body;
        const result= await Product.create(data);
        res.status(201).json({
            message: 'Product created Sucessfully',
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

export const getAllProducts=async(req,res)=>{
    try {
        const result = await Product.find();
        res.status(200).json({
            message: "Peoduct Fetched Succesfully",
            data: result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "error fetching products",
            error: error.message
        });
        
    }
};
export const getSpecificProductController = async(req,res)=>{
    try {
        let id =req.params.id;
        console.log(id);
        const result=await Product.findById(id)
        res.status(200).json({
            message:"specific product fetched",
            data:result
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "error fetching products",
            error: error.message
        })
        
    }
}
export const updateProductController=async(req,res)=>{
    try {
        let id =req.params.id
        let data= req.body
        const result= await Product.findByIdAndUpdate(id, data, {new:true})
        res.status(200).json({
            message:"product update successfully",
            data:result

        }
        )
    } catch (error) {
        res.status(500).json({
            message: "error fetching products",
            error: error.message
        })
    }
}
export const deleteProductController= async (req,res) =>{
    try {
        let id= req.params.id
        const result= await Product.findByIdAndDelete(id)
        res.status(200).json({
            message:"product deleted ",
            data:result
        })
    } catch (error) {
        
    }
};
