import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const shiftCustomerCollection = 'shiftcustomer';

const shiftCustomerSchema = new mongoose.Schema({
    userId: [{ type: String }],
    name: { type: String },
    phone: { type: String },
    email: { type: String },
    active: { type: Boolean, default: true },
    isCustomer: { type: Boolean },
    customerUser: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
});

const autoPopulateUser = function (next) {
    this.populate('customerUser', 'name _id phone email');
    next();
};

shiftCustomerSchema.pre('find', autoPopulateUser);
shiftCustomerSchema.pre('findOne', autoPopulateUser);
shiftCustomerSchema.pre('findById', autoPopulateUser);

shiftCustomerSchema.plugin(mongoosePaginate);

export const shiftCustomerModel = mongoose.model(shiftCustomerCollection, shiftCustomerSchema);