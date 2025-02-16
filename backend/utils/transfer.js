import mongoose from "mongoose";
import Amount from "../db/amount.js";

export const transferAmount = async (toId, fromId, amount) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        // Find the sender
        const fromUser = await Amount.findOne({ userId: fromId }).session(session);
        if (!fromUser) throw new Error("From user not found");
        if (fromUser.balance < amount) throw new Error("Insufficient balance");

        // Deduct amount from sender
        fromUser.balance -= amount;
        await fromUser.save({ session });

        // Update or create recipient balance within transaction
        const toUser = await Amount.findOneAndUpdate(
            { userId: toId },
            { $inc: { balance: amount } },
            { new: true, session: session, upsert: true } // ✅ Explicit session and upsert enabled
        );

        if (!toUser) throw new Error("To user not found");

        // Commit transaction
        await session.commitTransaction();
        return {
            balance: fromUser.balance,
            message: "Transfer successful"
        };
    } catch (e) {
        await session.abortTransaction();
        throw new Error(e.message);
    } finally {
        await session.endSession();
    }
};
