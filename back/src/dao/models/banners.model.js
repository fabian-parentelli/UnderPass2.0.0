import mongoose from "mongoose";

const bannerCollection = 'banners';

const bannerSchema = new mongoose.Schema({
    title: { type: String },
    folderName: { type: String },
    folders: { type: String },
    links: { type: String },
    imgUrl: [{ type: String }],
    date: { type: Date },
    active: { type: Boolean, default: true },
    country: { type: String }
});

export const bannersModel = mongoose.model(bannerCollection, bannerSchema);