import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const bookingCollection = 'bookings';

const bookingSchema = new mongoose.Schema({
    eid: { type: String },
    pid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    uid: { type: String },
    date: { type: Date, default: Date.now },
    type: { type: String },
    active: { type: Boolean, default: true },
});

const autoPopulateProduct = function (next) {
    this.populate('pid');
    next();
};

bookingSchema.pre('find', autoPopulateProduct);
bookingSchema.pre('findOne', autoPopulateProduct);
bookingSchema.pre('findById', autoPopulateProduct);

bookingSchema.plugin(mongoosePaginate);

export const bookingModel = mongoose.model(bookingCollection, bookingSchema);