import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const transferCollection = 'transfer';

const transferSchema = new mongoose.Schema({
    imgUrl: { type: String },
    userId: { type: String },
    orderId: { type: String },
    date: { type: Date, default: Date.now },
    confirm: { type: Boolean, default: false },
    type: { type: String },
    country: { type: String },
    data: {
        operation: { type: String },
        accountHolder: { type: String },
        bank: { type: String },
        dateData: { type: Date },
        total: { type: Number },
    }
});

transferSchema.plugin(mongoosePaginate);

export const transferModel = mongoose.model(transferCollection, transferSchema);