import { shiftPostponeModel } from '../models/shiftPostpone.model.js';

export default class ShiftCustomer {

    newPostpone = async (customer) => {
        return await shiftPostponeModel.create(customer);
    };

    getByAdminId = async (id, active) => {
        return await shiftPostponeModel.find({ adminId: id, active }).lean();
    }

    getById = async (id) => {
        return await shiftPostponeModel.findById(id).lean();
    };

    update = async (postpone) => {
        return await shiftPostponeModel.findByIdAndUpdate(postpone._id, postpone, { lean: true, new: true });
    };

};