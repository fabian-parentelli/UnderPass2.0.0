import mongoose from "mongoose";

const financialUserCollection = 'financialUser';

const financialUserSchema = new mongoose.Schema({
    holder: { type: String },
    cuit: { type: String },
    bank: { type: String },
    account: { type: String },
    cbu: { type: String },
    userId: { type: String },
    active: { type: Boolean, default: true }
});

export const financialUserModel = mongoose.model(financialUserCollection, financialUserSchema);