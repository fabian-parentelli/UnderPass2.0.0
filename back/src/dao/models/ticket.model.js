import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const ticketCollection = 'ticket';

const ticketSchema = new mongoose.Schema({
    orderId: { type: String },
    by: { type: String },
    to: { type: String },
    total: { type: Number },
    country: { type: String },
    date: { type: Date, default: Date.now }
});

ticketSchema.plugin(mongoosePaginate);

export const ticketModel = mongoose.model(ticketCollection, ticketSchema);