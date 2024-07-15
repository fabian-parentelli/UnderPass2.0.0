import mongoose from "mongoose";

const priceBannerCollection = 'priceBanners';

const priceBannerSchema = new mongoose.Schema({
    name: { type: String },
    country: { type: String },
    price: { type: Number },
    sales: [
        {
            days: { type: Number },
            sale: { type: Number },
        }
    ],
    date: { type: Date, default: Date.now },
    active: { type: Boolean, default: true },
});

export const priceBannerModel = mongoose.model(priceBannerCollection, priceBannerSchema);