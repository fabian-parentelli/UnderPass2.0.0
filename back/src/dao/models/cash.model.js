import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const cashCollection = 'cash';

const cashSchema = new mongoose.Schema({
    cash: { type: Number, default: 0 },
    treasure: { type: Number, default: 0 },
    difCash: { type: Number, default: 0 },
    difTreasure: { type: Number, default: 0 },
    inOut: { type: String },
    ticketId: { type: String },
    type: { type: String },
    active: { type: Boolean, default: true },
    date: { type: Date, default: Date.now },
    country: { type: String },
});

cashSchema.plugin(mongoosePaginate);

export const cashModel = mongoose.model(cashCollection, cashSchema);