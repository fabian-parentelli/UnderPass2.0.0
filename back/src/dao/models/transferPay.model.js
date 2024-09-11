import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const transferPayCollection = 'transfer_pay';

const transferPaySchema = new mongoose.Schema({
    imgUrl: { type: String },
    userId: { type: String },
    orderId: [
        { type: String }
    ],
    date: { type: Date, default: Date.now },
    country: { type: String },
    data: {
        operation: { type: String },
        customer: { type: String },
        accountHolder: { type: String },
        bank: { type: String },
        dateData: { type: Date },
        total: { type: Number },
    }
});

transferPaySchema.plugin(mongoosePaginate);

export const transferPayModel = mongoose.model(transferPayCollection, transferPaySchema);