import { shiftCustomerModel } from '../models/shiftCustomer.model.js';

export default class ShiftCustomer {

    newCustomer = async (customer) => {
        return await shiftCustomerModel.create(customer);
    };

    getShiftCustomerByUserId = async (userId) => {
        return await shiftCustomerModel.find({ userId }).lean();
    };

    getShiftCustomerByEmail = async (email) => {
        return await shiftCustomerModel.findOne({ email: email }).lean();
    };

    getShiftCustomerById = async (id) => {
        return await shiftCustomerModel.findById(id).lean();
    };

};