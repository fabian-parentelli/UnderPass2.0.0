import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const publicityCollection = 'publicity';

const publicitySchema = new mongoose.Schema({
    title: { type: String },
    folderName: { type: String },
    folders: { type: String },
    links: { type: String },
    imgUrl: [{ type: String }],
    date: { type: Date },
    active: { type: Boolean, default: true },
    country: { type: String },
    category: { type: String },
    end: { type: Date },
    type: { type: String }
});

publicitySchema.plugin(mongoosePaginate);

export const publicityModel = mongoose.model(publicityCollection, publicitySchema);