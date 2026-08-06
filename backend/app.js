import express from "express"
import dotenv from 'dotenv'
import cookieParser from "cookie-parser"
import { connectDB } from "./src/config/db.js"
dotenv.config()
const PORT=process.env.PORT
const app=express()
app.use(express.json())
app.use(cookieParser())
app.listen(PORT,()=>{
    console.log(`Your server is running in http://localhost:${PORT} `)
    connectDB()
})