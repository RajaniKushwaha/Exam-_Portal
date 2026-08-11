import express from "express"
import dotenv from 'dotenv'
import cookieParser from "cookie-parser"
import { connectDB } from "./src/config/db.js"
import authRouter from "./src/routes/user.routes.js"
dotenv.config()
app.use(
    cors({
    origin:process.env.Frontend_URL,
    credentials:true
    })


)
const PORT=process.env.PORT
const app=express()
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth',authRouter)
app.get('/',(req,res)=>{
    return res.json({message:"Server is Started"})
})
app.listen(PORT,()=>{
    console.log(`Your server is running in http://localhost:${PORT} `)
    connectDB()
})