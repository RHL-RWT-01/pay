import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export function connectDB() {
    mongoose
        .connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("MongoDB Connected Successfully"))
        .catch((err) => console.error("MongoDB Connection Error:", err));
}