import mongoose from "mongoose";

const tutorialCollection = 'tutorials';

const tutorialSchema = new mongoose.Schema({
    name: { type: String },
    url: { type: String },
    title: { type: String },
    active: { type: Boolean, default: true }
});

export const tutorialModel = mongoose.model(tutorialCollection, tutorialSchema);