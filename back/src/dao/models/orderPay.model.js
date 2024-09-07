import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const orderPayCollection = 'order_pay';

const orderPaySchema = new mongoose.Schema({
    userId: { type: String },
    orderId: { type: String },
    total: { type: Number },
    pay: {
        isPay: { type: Boolean, default: false },
        datePay: { type: Date },
    },
    active: { type: Boolean, default: true },
    date: { type: Date, default: Date.now },
    country: { type: String },
});

orderPaySchema.plugin(mongoosePaginate);

export const orderPayModel = mongoose.model(orderPayCollection, orderPaySchema);