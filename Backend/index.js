import express from "express";
import { userRouter } from "./Route/userRoute.js";
import { connectDB } from "./config/connectMongo.js";
import { productRouter } from "./Route/productRoute.js";
import { router } from "./Route/orderRoute.js";
import {fileRouter} from "./Route/file.route.js";



const app = express();
app.use(express.json());

connectDB()

// Routes
app.use("/user", userRouter);
app.use("/product", productRouter)
app.use("/order", router)
app.use("/file", fileRouter);

const PORT = 1000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


