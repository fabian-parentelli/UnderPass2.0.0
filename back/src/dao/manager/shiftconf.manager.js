import { shiftconfModel } from '../models/shiftconf.model.js';

export default class Shiftconf {

    newShift = async (shift) => {
        return await shiftconfModel.create(shift);
    };

    getShiftconf = async (query, page, limit) => {
        return await shiftconfModel.paginate(query, { limit, page, lean: true });
    };

    getById = async (id) => {
        return await shiftconfModel.findById(id).lean();
    };

    update = async (shift) => {
        return await shiftconfModel.findByIdAndUpdate(shift._id, shift, { lean: true, new: true });
    };

};