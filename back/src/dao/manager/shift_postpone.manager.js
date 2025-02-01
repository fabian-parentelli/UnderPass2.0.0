import { postponeModel } from '../models/shift_postpone.model.js';

export default class ShiftCustomer {

    newPostpone = async (customer) => {
        return await postponeModel.create(customer);
    };

    getByAdminId = async (id, active = true) => {
        return await postponeModel.find({ adminId: id, active }).lean();
    }

    getById = async (id) => {
        return await postponeModel.findById(id).lean();
    };

    getByShiftId = async (id) => {
        return await postponeModel.findOne({ shiftId: id, active: true }).lean();
    };

    update = async (postpone) => {
        return await postponeModel.findByIdAndUpdate(postpone._id, postpone, { lean: true, new: true });
    };

    postponeAmount = async () => {
        return await postponeModel.countDocuments();
    };

    getPostPone = async (query) => {
        return await postponeModel.find(query).lean();
    };

    deleteById = async (id) => {
        return await postponeModel.findByIdAndDelete(id);
    };

    deleteMany = async (query) => {
        return await postponeModel.deleteMany(query);
    };

};