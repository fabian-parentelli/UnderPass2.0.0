import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const orderSellerCollection = 'order_seller';

const orderSellerSchema = new mongoose.Schema({
    orderId: { type: String },
    buyerUserId: { type: String },
    sellerUserId: { type: String },
    cart: [
        {
            typeId: { type: String },
            quantity: { type: Number },
            price: { type: Number },
            is: { type: String }
        }
    ],
    pay: {
        payIn: {
            isPayIn: { type: Boolean, default: false },
            datePayIn: { type: Date }
        },
        payOut: {
            isPayOut: { type: Boolean, default: false },
            datePayOut: { type: Date }
        },
    },
    active: { type: Boolean, default: true },
    date: { type: Date, default: Date.now },
    total: { type: Number },
});

orderSellerSchema.plugin(mongoosePaginate);

export const orderSellerModel = mongoose.model(orderSellerCollection, orderSellerSchema);