import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const newsCollection = 'news';

const newsSchema = new mongoose.Schema({
    folderName: { type: String },
    title: { type: String },
    webSite: { type: String },
    img: [{ type: String }],
    socialMedia: {
        instagrame: { type: String },
        facebook: { type: String },
        youtube: { type: String },
        twetter: { type: String },
    },
    subText: { type: String },
    text: { type: String },
    location: {
        country: { type: String },
        province: { type: String },
        city: { type: String },
    },
    video: { type: String },
    date: { type: Date, default: Date.now },
    active: { type: Boolean, default: true },
    sign: { type: String },
    type: { type: String, default: 'news' },
});

newsSchema.plugin(mongoosePaginate);

export const newsModel = mongoose.model(newsCollection, newsSchema);