import express from 'express'
import { connectDB } from './config/connectdb.js'
import { userRouter } from './routes/user.route.js'
import { productRouter } from './routes/product.route.js'


const app= express()
const port= 4000

app.use(express.json())
connectDB()

app.listen(port, ()=> {
    console.log(`app is running on ${port}`);
})
//mount router
app.use('/user', userRouter)
app.use("/product", productRouter);