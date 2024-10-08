import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const alertCollection = 'alerts';

const alertSchema = new mongoose.Schema({
    eventId: { type: String },
    userId: { type: String },
    type: { type: String },
    active: { type: Boolean, default: true },
    date: { type: Date, default: Date.now },
    orderSellerId: { type: String },
});

alertSchema.plugin(mongoosePaginate);

export const alertsModel = mongoose.model(alertCollection, alertSchema);

// type: application_{cards} => Solicitud de publicidad.
// type: sold_{product} => Vendiste un producto.