 import express from "express"
 import mongoose from "mongoose"
 import cors from "cors"
 import dotenv from "dotenv"
import { userRoute } from "./routes/auth"

const app= express()
const PORT =5000
dotenv.config()
const MONGOURL= process.env.MONGO_URL as string


//middlewares
app.use(express.json())
app.use(cors())
app.use('/user',userRoute)

// MongoDb connection
mongoose.connect(MONGOURL).then(()=>{
    console.log("Database connected successfully")
})

//listening port
app.listen(PORT,()=>{
    console.log(`listing the port ${PORT}`)
})





