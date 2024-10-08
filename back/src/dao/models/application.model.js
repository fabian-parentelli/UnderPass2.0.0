import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const applicationCollection = 'application';

const applicationSchema = new mongoose.Schema({

    folderName: { type: String },
    title: { type: String },
    category: { type: String },
    days: { type: Number },
    isWorkOur: { type: Boolean },
    text: { type: String },
    userId: { type: String },
    country: { type: String },
    active: { type: Boolean, default: true },
    img: [{ type: String }],
    date: { type: Date, default: Date.now },
    type: { type: String },
    pay: { type: Boolean, default: false },
    underVew: { type: Boolean, default: true },
    applicationId: { type: String },
    inPortal: { type: Boolean },
    links: { type: String },
});

applicationSchema.plugin(mongoosePaginate);

export const apllicationModel = mongoose.model(applicationCollection, applicationSchema);