import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const auditCollection = 'audit';

const auditSchema = new mongoose.Schema({
    cash: { type: Number, default: 0 },
    treasure: { type: Number, default: 0 },
    inOut: { type: String },
    ticketId: { type: String },
    cashId: { type: String },
    type: { type: String },
    active: { type: Boolean, default: true },
    date: { type: Date, default: Date.now },
    country: { type: String },
});

auditSchema.plugin(mongoosePaginate);

export const auditModel = mongoose.model(auditCollection, auditSchema);