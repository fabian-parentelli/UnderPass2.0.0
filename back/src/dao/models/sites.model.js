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
    active: { type: Boolean },
    date: { type: Date, default: Date.now },
});

// const autoPopulateUser = function (next) {
//     this.populate('userId', 'name _id avatar')
//         .populate('report.userId', 'name _id avatar');
//     next();
// };

// sitesSchema.pre('find', autoPopulateUser);
// sitesSchema.pre('findOne', autoPopulateUser);
// sitesSchema.pre('findById', autoPopulateUser);

sitesSchema.plugin(mongoosePaginate);

export const sitesModel = mongoose.model(sitesCollection, sitesSchema);