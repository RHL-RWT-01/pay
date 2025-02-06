import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';
import { connectDB } from './db/connectDB.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use('/api/v1/user',userRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    connectDB();
});