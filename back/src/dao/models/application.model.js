import mongoose from "mongoose";

const applicationCollection = 'application';

const applicationSchema = new mongoose.Schema({
    folderName: { type: String },
    title: { type: String },
    category: { type: String },
    days: { type: Number },
    underBanner: { type: Boolean },
    textBanner: { type: String },
    user: { type: String },
    country: { type: String },
    active: { type: Boolean, default: true },
    img: [{ type: String }],
    date: { type: Date, default: Date.now },
    type: { type: String },
});

export const apllicationModel = mongoose.model(applicationCollection, applicationSchema);