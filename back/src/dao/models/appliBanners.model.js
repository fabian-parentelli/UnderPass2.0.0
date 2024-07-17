import mongoose from "mongoose";

const appliBannerCollection = 'appliBanners';

const appliBannerSchema = new mongoose.Schema({
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
});

export const aplliBannersModel = mongoose.model(appliBannerCollection, appliBannerSchema);