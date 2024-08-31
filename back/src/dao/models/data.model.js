import mongoose from "mongoose";

const dataCollection = 'data';

const dataSchema = new mongoose.Schema({
    bankingAlias: { type: String },
    accountHolder: { type: String },
    bank: { type: String },
    perfomance: { type: String },
    phone: { type: String },
    instagrame: { type: String },
    facebook: { type: String },
    youtube: { type: String },
    twitter: { type: String },
    country: { type: String },
});

export const dataModel = mongoose.model(dataCollection, dataSchema);