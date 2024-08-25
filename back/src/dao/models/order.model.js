import mongoose from "mongoose";

const orderCollection = 'order';

const orderSchema = new mongoose.Schema({
    userId: { type: String },
    cart: [
        {
            typeId: { type: String },
            quantity: { type: Number },
            price: { type: Number },
            is: { type: String }
        }
    ],
    total: { type: Number },
    pay: {
        isPay: { type: Boolean, default: false },
        datePay: { type: Date }
    },
    active: { type: Boolean, default: true },
    date: { type: Date, default: Date.now }
});

export const orderModel = mongoose.model(orderCollection, orderSchema);