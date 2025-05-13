import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

import cookieParser from "cookie-parser";
import severityRoute from "./src/routes/orgRoute.js";
import { EventEmitter } from "events";

dotenv.config();

//connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

EventEmitter.defaultMaxListeners = 20;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.use("/api/v1/", severityRoute);

app.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});
