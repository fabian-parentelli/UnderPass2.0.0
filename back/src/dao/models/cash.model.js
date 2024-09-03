import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const cashCollection = 'cash';

const cashSchema = new mongoose.Schema({
    cash: { type: Number },
    treasure: { type: Number },
    dif: { type: Number },
    inOut: { type: String },
    ticketId: { type: String },
    type: { type: String },
    active: { type: Boolean, default: true },
    date: { type: Date, default: Date.now },
});

cashSchema.plugin(mongoosePaginate);

export const cashModel = mongoose.model(cashCollection, cashSchema);