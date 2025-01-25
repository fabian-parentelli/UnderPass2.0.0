import { getCustomer, isNotTime } from '../dao/DTOS/shift.dto.js';
import { shiftManager } from '../dao/manager/index.manager.js';

export default class ShiftRepository {

    newShift = async (shift) => {
        const result = await shiftManager.newShift(shift);
        return result;
    };
    
    getDataShift = async (query, day) => {
        const shifts = await shiftManager.getDataShift(query);
        const result = await isNotTime(shifts, day);
        return result;
    };
    
    getShifts = async (query) => {
        const preResult = await shiftManager.getDataShift(query);
        const result = await getCustomer(preResult);        
        return result;
    };
    
    update = async (shift) => {
        const result = await shiftManager.update(shift);
        return result;
    };

    getById = async (id) => {
        const result = await shiftManager.getById(id);
        return result;
    };
};