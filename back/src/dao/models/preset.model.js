import mongoose from "mongoose";

const presetCollection = 'preset';

const presetSchema = new mongoose.Schema({
    name: { type: String },
    img: { type: String },
    active: { type: Boolean, default: true }
});

export const presetModel = mongoose.model(presetCollection, presetSchema);