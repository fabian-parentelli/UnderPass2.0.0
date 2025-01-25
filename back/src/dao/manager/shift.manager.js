import { shiftModel } from '../models/shift.model.js';

export default class Shift {

    newShift = async (shift) => {
        return await shiftModel.create(shift);
    };

    getDataShift = async (query) => {
        return await shiftModel.find(query).lean();
    };

    update = async (shift) => {
        return await shiftModel.findByIdAndUpdate(shift._id, shift, { new: true, lean: true });
    };

    getById = async (id) => {
        return await shiftModel.findById(id).lean();
    };

};