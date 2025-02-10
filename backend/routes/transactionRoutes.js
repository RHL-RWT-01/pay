import express from 'express';
import { protectedRoute } from '../middlewares/protectedRoute.js';
import { transferAmount } from '../utils/transfer.js';
import Amount from '../db/amount.js';

const router = express.Router();

router.post('/transfer', protectedRoute, async (req, res) => {
    try {
        const transfer = await transferAmount(req.body.toId, req.user._id, req.body.amount);
        res.status(200).json(transfer);
    } catch (e) {
        console.error("Error in transfer route", e.message);
        throw new Error(e.message);
    }
});

router.get('/balance', protectedRoute, async (req, res) => {
    try {
        const balance = await Amount.findById(req.user._id, 'balance');
        if (!balance) {
            return res.status(404).json({ error: "Balance not found" });
        }
        res.status(200).json(balance);
    } catch (e) {
        console.error("Error in balance route", e.message);
        throw new Error(e.message);
    }
});

export default router;