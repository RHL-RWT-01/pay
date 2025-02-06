import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.get('/',(req,res)=>{
    res.json({ message: 'Welcome to the REST API!' });
})

app.use('/user',userRoutes);

app.listen((port));