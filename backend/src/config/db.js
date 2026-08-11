import mongoose from "mongoose";
export const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.db)
        console.log("Database connect successfully")
    } catch (error) {
        console.log(`Error occure during the connection of database ${error}`)
    }
}