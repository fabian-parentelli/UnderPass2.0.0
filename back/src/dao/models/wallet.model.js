import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const walletCollection = 'wallet';

const walletSchema = new mongoose.Schema({
    userId: { type: String },
    country: { type: String },
    total: { type: Number, default: 0 },
    money: [
        {
            date: { type: Date, default: Date.now }, // - Fecha de la transacción.
            type: { type: Boolean, required: true }, // - True es que entra, falls es que sale.  
            byTo: { type: String }, // ------------------ Viene de ... o va para ....
            TypeMotion: { type: String }, // ------------ Transferencia, Credito, Debito, Cash. 
            ticket: { type: String }, // ---------------- Numero de la transacción de mercado pago.
            status: { type: String }, // ---------------- Estado en el cual se encuentra la transacción.    
        }
    ]
});

walletSchema.plugin(mongoosePaginate);

export const walletModel = mongoose.model(walletCollection, walletSchema);