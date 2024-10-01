import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const messnewsCollection = 'messnews';

const messnewsSchema = new mongoose.Schema({
    text: { type: String },
    userId: { type: String },
    typeId: { type: String },
    date: { type: Date, default: Date.now },
    active: { type: Boolean, default: true },
});

messnewsSchema.plugin(mongoosePaginate);

export const messnewsModel = mongoose.model(messnewsCollection, messnewsSchema);