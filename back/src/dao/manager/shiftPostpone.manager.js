import { shiftPostponeModel } from '../models/shiftPostpone.model.js';

export default class ShiftCustomer {

    newPostpone = async (customer) => {
        return await shiftPostponeModel.create(customer);
    };

    getByAdminId = async (id, active = true) => {
        return await shiftPostponeModel.find({ adminId: id, active }).lean();
    }

    getById = async (id) => {
        return await shiftPostponeModel.findById(id).lean();
    };

    getByShiftId = async (id) => {
        return await shiftPostponeModel.findOne({ shiftId: id }).lean();
    };

    update = async (postpone) => {
        return await shiftPostponeModel.findByIdAndUpdate(postpone._id, postpone, { lean: true, new: true });
    };

    postponeAmount = async () => {
        return await shiftPostponeModel.countDocuments();
    };

    getPostPone = async (query) => {
        return await shiftPostponeModel.find(query).lean();
    };

    delPostponeById = async (id) => {
        return await shiftPostponeModel.findByIdAndDelete(id);
    };

    deleteMany = async (query) => {
        return await shiftPostponeModel.deleteMany(query);
    };
};