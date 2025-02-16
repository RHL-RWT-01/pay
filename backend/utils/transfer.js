import mongoose from "mongoose";
import Amount from "../db/amount.js";

export const transferAmount = async (toId, fromId, amount) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const fromUser = await Amount.findOne({ userId: fromId }).session(session);
        if (!fromUser) throw new Error("From user not found");
        if (fromUser.balance < amount) throw new Error("Insufficient balance");

        fromUser.balance -= amount;
        await fromUser.save({ session });

        const toUser = await Amount.findOneAndUpdate(
            { userId: toId },
            { $inc: { balance: amount } },
            { new: true, session }
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
