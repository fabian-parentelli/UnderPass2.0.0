import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const notesCollection = 'notes';

const notesSchema = new mongoose.Schema({
    title: { type: String },
    text: { type: String },
    userId: { type: String },
});

notesSchema.plugin(mongoosePaginate);

export const notesModel = mongoose.model(notesCollection, notesSchema);