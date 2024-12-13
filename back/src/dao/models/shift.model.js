import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const shiftCollection = 'shift';

const shiftSchema = new mongoose.Schema({
    userId: { type: String },
    hour: [{ type: String }],
    room: {type: String},
    day: { 
        day: {type: Number},
        month: {type: String},
        year: {type: Number},
     },
    active: { type: Boolean, default: true }
});

shiftSchema.plugin(mongoosePaginate);

export const shiftModel = mongoose.model(shiftCollection, shiftSchema);