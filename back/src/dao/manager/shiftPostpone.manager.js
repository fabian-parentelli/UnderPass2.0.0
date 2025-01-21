import { shiftPostponeModel } from '../models/shiftPostpone.model.js';

export default class ShiftCustomer {

    newPostpone = async (customer) => {
        return await shiftPostponeModel.create(customer);
    };

    getById = async (id) => {
        return await shiftPostponeModel.findById(id).lean();
    };

};