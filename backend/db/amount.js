import mongoose from "mongoose";

const amountSchema = mongoose.Schema({
    balance: {
        type: Number, required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
    }
})
const Amount = mongoose.model("Amount", amountSchema);

export default Amount;