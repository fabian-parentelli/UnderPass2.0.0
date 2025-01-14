import mongoose from 'mongoose';
import env from '../../config/dotEnv.config.js';
import mongoosePaginate from 'mongoose-paginate-v2';

const codeCollection = 'underpass';

const secondaryDB = mongoose.createConnection(env.mongoDB2);

const codeSchema = new mongoose.Schema({
    name: { type: String },
    route: { type: String },
    type: { type: String },
    code: { type: String },
    description: { type: String },
    version: { type: String },
    date: { type: Date, default: Date.now },
    active: { type: Boolean, default: true },
});

codeSchema.plugin(mongoosePaginate);

export const codesModelSecondary = secondaryDB.model(codeCollection, codeSchema);