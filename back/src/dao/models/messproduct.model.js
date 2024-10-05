import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const messproductCollection = 'messproduct';

const messproductSchema = new mongoose.Schema({
    text: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    typeId: { type: String },
    date: { type: Date, default: Date.now },
    active: { type: Boolean, default: true },
    report: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
            date: { type: Date },
            reason: { type: String },
        }
    ],
    country: { type: String }
});

const autoPopulateUser = function (next) {
    this.populate('userId', 'name _id avatar')
        .populate('report.userId', 'name _id avatar');
    next();
};

messproductSchema.pre('find', autoPopulateUser);
messproductSchema.pre('findById', autoPopulateUser);

messproductSchema.plugin(mongoosePaginate);

export const messproductModel = mongoose.model(messproductCollection, messproductSchema);