import express, { Request, Response } from "express";
import dotenv from "dotenv"
import morgan from "morgan";
import cookieParser from "cookie-parser";
import connectDb from "../src/config/db";

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

connectDb()

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

app.listen(PORT, () => {
    console.log("Server is listening on port ", PORT)
})