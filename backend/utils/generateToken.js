import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
export const generateToken = (userId,res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });

    res.cookie("jwt", token, {
        expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), 
        httpOnly: true, 
        sameSite: "strict",
    });
}