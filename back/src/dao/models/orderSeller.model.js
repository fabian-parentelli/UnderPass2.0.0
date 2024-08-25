import mongoose from "mongoose";

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
    date: { type: Date, default: Date.now }
});

export const orderSellerModel = mongoose.model(orderSellerCollection, orderSellerSchema);