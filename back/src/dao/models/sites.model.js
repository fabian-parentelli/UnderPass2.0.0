import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const sitesCollection = 'sites';

const sitesSchema = new mongoose.Schema({
    title: { type: String },
    category: { type: String },
    subCategory: { type: String },
    userId: { type: String },
    link: { type: String },
    location: {
        city: { type: String },
        province: { type: String },
        country: { type: String },
    },
    images: [
        {
            name: { type: String },
            url: { type: String },
            position: { type: String },
        }
    ],
    description: {
        short: { type: String },
        long: { type: String },
    },
    socialMedia: {
        facebook: { type: String },
        instagrame: { type: String },
        twitter: { type: String },
        spotify: { type: String },
        youtube: { type: String },
        whatsApp: { type: String }
    },
    events: [{ type: String }],
    products: [{ type: String }],
    cast: [
        {
            castTitle: { type: String },
            castText: { type: String }
        }
    ],
    castPerson: { type: String },
    discography: [
        {
            discTitle: { type: String },
            discText: { type: String },
            discUrls: [{ type: String }]
        }
    ],
    videos: [{ type: String }],
    stream: [
        {
            description: { type: String },
            url: { type: String },
        }
    ],
    isEvent: { type: Boolean },
    isProduct: { type: Boolean },
    isDiscography: { type: Boolean },
    isVideo: { type: Boolean },
    isShift: { type: Boolean },
    isGalery: { type: Boolean },
    active: { type: Boolean },
    date: { type: Date, default: Date.now },
    type: { type: String, default: 'site' },
    active: { type: Boolean, default: true },
});

sitesSchema.plugin(mongoosePaginate);

export const sitesModel = mongoose.model(sitesCollection, sitesSchema);