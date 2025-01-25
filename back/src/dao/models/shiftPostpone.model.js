import mongoose from "mongoose";

const shiftPostponeCollection = 'shiftPostpone';

const shiftPostponeSchema = new mongoose.Schema({
    shiftId: { type: mongoose.Schema.Types.ObjectId, ref: 'shift' },
    to: { type: String },
    message: { type: String },
    active: { type: Boolean, default: true },
    date: { type: Date, default: Date.now },
    adminId: { type: String },
    response: { type: Boolean }, // Si ha echo o no la respuesta
    accept: { type: Boolean },      // Acepta o no (true: pospone, false: Suspende)
    resMessage: { type: String }
});

const autoPopulateShift = function (next) {
    this.populate('shiftId');
    next();
};

shiftPostponeSchema.pre('find', autoPopulateShift);
shiftPostponeSchema.pre('findOne', autoPopulateShift);
shiftPostponeSchema.pre('findById', autoPopulateShift);

export const shiftPostponeModel = mongoose.model(shiftPostponeCollection, shiftPostponeSchema);