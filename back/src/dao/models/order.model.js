import mongoose from "mongoose";

const orderCollection = 'order';

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    cart: [
        {
            productId: { type: String },
            eventId: { type: String },
            ticketId: { type: String },
            quantity: { type: Number },
            price: { type: Number },
            is: { type: String }
        }
    ],
    pay: { type: Boolean, default: false },
    active: { type: Boolean, default: true }
});

const autoPopulateUser = function (next) {
    this.populate('userId');
    next();
};

orderSchema.pre('find', autoPopulateUser);
orderSchema.pre('findOne', autoPopulateUser);
orderSchema.pre('findById', autoPopulateUser);

export const orderModel = mongoose.model(orderCollection, orderSchema);