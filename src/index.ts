import express, { Request, Response } from "express";
import dotenv from "dotenv"
import morgan from "morgan";
import cookieParser from "cookie-parser";
import connectDb from "./config/db"
import severityRoute from "./routes/orgRoute";

dotenv.config()

connectDb()
const app = express()

const PORT = process.env.PORT || 5000


//middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))
app.use("/api/v1/", severityRoute)
app.listen(PORT, () => {
    console.log("Server is listening on port ", PORT)
})