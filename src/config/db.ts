import mongoose from "mongoose";
import { config } from "dotenv"

config()

const dbUri = process.env.DB

const connectDb = async ()=> {

    if (!dbUri) {
        console.error("❌ Database URI not found in environment variables.");
        process.exit(1);
    }
    try {
        await mongoose.connect(dbUri)
        console.log("Successfully connected to the Database ✅")
    } catch (error) {
        console.log("Error occured while connecting to the database ❌")
        process.exit(1)
    }
}

export default connectDb