import mongoose from "mongoose";

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
            date: { type: Date, default: Date.now },
            reason: { type: String },
        }
    ]
});

const autoPopulateUser = function (next) {
    this.populate('userId', 'name _id avatar')
        .populate('report.userId', 'name _id avatar');
    next();
};

messnewsSchema.pre('find', autoPopulateUser);

export const messnewsModel = mongoose.model(messnewsCollection, messnewsSchema);