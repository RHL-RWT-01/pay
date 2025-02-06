import express from "express";
import User from "../db/user.js";
import bcrypt from "bcryptjs";
const router = express.Router();
import { generateToken } from "../utils/generateToken.js";
import { protectedRoute } from "../middlewares/protectedRoute.js";

router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res
                .status(400)
                .json({ message: "Please provide all required fields" });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({ name, email, password: hashedPassword });
        user.save();
        const userId = user._id;
        res.status(201).json({ message: "User registered successfully" });
    } catch (e) {
        console.log("Error in signup route", e);
        res.status(500).json({ message: e.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!email || !password || !name) {
            return res
                .status(400)
                .json({ message: "Please provide all required fields" });
        }
        const user = await User.findOne({ email });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch || !user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = generateToken(user._id, res);
        res.status(200).json({ message: "User logged in successfully", token });
    } catch (e) {
        console.log("Error in login route", e);
        res.status(500).json({ message: e.message });
    }
});

router.post("/update", protectedRoute, async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.findByIdAndUpdate(req.user._id, { name, email, password:hashedPassword }, { new: true });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const token = generateToken(user._id, res);
        res.status(200).json({ message: "User updated successfully", user, token });
    } catch (e) {
        console.log("Error in update route", e);
        res.status(500).json({ message: e.message });
    }
});

router.delete("/logout", protectedRoute, async (req, res) => {
    try {
        res.clearCookie("jwt");
        res.status(200).json({ message: "User logged out successfully" });
    } catch (e) {
        console.log("Error in logout route", e);
        res.status(500).json({ message: e.message });
    }
});

export default router;
