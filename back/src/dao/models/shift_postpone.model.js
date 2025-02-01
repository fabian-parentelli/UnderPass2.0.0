import mongoose from "mongoose";

const postponeCollection = 'shift_postpone';

const postponeSchema = new mongoose.Schema({
    shiftId: { type: mongoose.Schema.Types.ObjectId, ref: 'shift' },
    to: { type: String },
    message: { type: String },
    active: { type: Boolean, default: true },
    date: { type: Date, default: Date.now },
    adminId: { type: String },
    response: { type: Boolean },    
    accept: { type: Boolean },      
    resMessage: { type: String }
});

const autoPopulateShift = function (next) {
    this.populate('shiftId');
    next();
};

postponeSchema.pre('find', autoPopulateShift);
postponeSchema.pre('findOne', autoPopulateShift);
postponeSchema.pre('findById', autoPopulateShift);

export const postponeModel = mongoose.model(postponeCollection, postponeSchema);