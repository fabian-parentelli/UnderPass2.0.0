import { typeCustomer } from '../dao/DTOS/shiftCustomer.dto.js';
import { shiftCustomerManager } from '../dao/manager/index.manager.js';

export default class ShiftCustomerRepository {

    newCustomer = async (customer) => {        
        const result = await shiftCustomerManager.newCustomer(customer);
        return result;
    };

    getShiftCustomerByUserId = async (userId) => {
        const preResult = await shiftCustomerManager.getShiftCustomerByUserId(userId);
        const result = await typeCustomer(preResult);
        return result;
    };

    getShiftCustomerByEmail = async (email) => {
        const result = await shiftCustomerManager.getShiftCustomerByEmail(email);
        return result;
    };

    getShiftCustomerById = async (id) => {
        const result = await shiftCustomerManager.getShiftCustomerById(id);
        return result;
    };
    
    update = async (customer) => {
        const result = await shiftCustomerManager.update(customer);
        return result;
    };
};