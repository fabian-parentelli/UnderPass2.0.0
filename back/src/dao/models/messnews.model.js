import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const messnewsCollection = 'messnews';

const messnewsSchema = new mongoose.Schema({
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

messnewsSchema.pre('find', autoPopulateUser);

messnewsSchema.plugin(mongoosePaginate);

export const messnewsModel = mongoose.model(messnewsCollection, messnewsSchema);