import mongoose from "mongoose";

const tokenCollection = 'token';

const tokenSchema = new mongoose.Schema({
    userId: { type: String },
    userRole: { type: String },
    password: { type: String },
    date: { type: Date, default: Date.now },
    pass: { type: String },
});

export const tokenModel = mongoose.model(tokenCollection, tokenSchema);