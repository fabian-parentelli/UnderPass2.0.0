import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const sitesCollection = 'sites';

const sitesSchema = new mongoose.Schema({
    title: { type: String },
    category: { type: String },
    subCategory: { type: String },
    imgs: {
        banner: { position: { type: String }, url: { type: String } }
    },
    location: {
        city: { type: String },
        province: { type: String },
    }
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    // typeId: { type: String },
    // date: { type: Date, default: Date.now },
    // active: { type: Boolean, default: true },
    // report: [
    //     {
    //         userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    //         date: { type: Date },
    //         reason: { type: String },
    //     }
    // ],
    // country: { type: String }
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