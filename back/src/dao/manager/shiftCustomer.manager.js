import { shiftCustomerModel } from '../models/shiftCustomer.model.js';

export default class ShiftCustomer {

    newCustomer = async (customer) => {
        return await shiftCustomerModel.create(customer);
    };

    getShiftCustomerByUserId = async (userId) => {
        return await shiftCustomerModel.find({ userId }).lean();
    };

};