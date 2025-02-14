import mongoose from "mongoose";
import Amount from "../db/amount.js";

export const transferAmount = async (toId,fromId,amount) => {
    const session = await mongoose.startSession();
    try{
        await session.startTransaction();
        
        const fromUser = await Amount.findOne({userId:fromId}).session(session);
        if(!fromUser){
            throw new Error("From user not found");
        }
        
        if(fromUser.balance < amount){
            throw new Error("Insufficient balance");
        }
        
        fromUser.balance -= amount;
        await fromUser.save();
        
        const toUser = await Amount.findOneAndUpdate({userId:toId}, {$inc: {balance: amount}}, {new: true}).session(session);
        toUser.save();
        await session.commitTransaction();
        
        return {message: "Transfer successful"};
    }catch(e){
        await session.abortTransaction();
        throw new Error(e.message);
    }finally{
        await session.endSession();
    }
}