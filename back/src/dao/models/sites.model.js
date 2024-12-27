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
    imgPortal: {
        banner: {
            url: { type: String },
            position: { type: String }
        },
        logo: {
            url: { type: String },
            position: { type: String }
        }
    },
    isEvent: { type: Boolean, default: false },
    events: [{ type: String }],
    description: {
        short: { type: String },
        long: { type: String },
        img: {
            url: { type: String },
            name: { type: String },
            position: { type: String }
        }
    },
    cast: [
        {
            title: { type: String },
            text: { type: String },
            img: {
                url: { type: String },
                name: { type: String },
                position: { type: String },
            }
        }
    ],
    socialMedia: {
        facebook: { type: String },
        instagrame: { type: String },
        twitter: { type: String },
        spotify: { type: String },
        youtube: { type: String },
        whatsApp: { type: String }
    },
    isDiscography: { type: Boolean, default: false },
    discography: [
        {
            title: { type: String },
            text: { type: String },
            songs: [{ type: String }],
            img: {
                url: { type: String },
                name: { type: String },
                position: { type: String }
            }
        }
    ],
    isProduct: { type: Boolean, default: false },
    products: [{ type: String }],
    isGalery: { type: Boolean, default: false },
    galery: [
        {
            url: { type: String },
            name: { type: String },
            position: { type: String }
        }
    ],
    isVideo: { type: Boolean, default: false },
    videos: [
        {
            url: { type: String },
            name: { type: String },
            description: { type: String }
        }
    ],
    castPerson: {
        text: { type: String },
        img: {
            url: { type: String },
            position: { type: String }
        }
    },
    stream: [
        {
            description: { type: String },
            url: { type: String },
        }
    ],
    isShift: { type: Boolean, default: false },
    active: { type: Boolean },
    date: { type: Date, default: Date.now },
    type: { type: String, default: 'site' },
    active: { type: Boolean, default: true },
});

sitesSchema.plugin(mongoosePaginate);

export const sitesModel = mongoose.model(sitesCollection, sitesSchema);