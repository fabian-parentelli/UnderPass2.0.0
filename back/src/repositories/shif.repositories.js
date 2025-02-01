import { getCustomer, isNotTime, updByDate } from '../dao/DTOS/shift.dto.js';
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
        const resultDB = await shiftManager.getDataShift(query);
        const resultCust = await getCustomer(resultDB);
        const result = await updByDate(resultCust);
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

    shiftAmount = async () => {
        const result = await shiftManager.shiftAmount();
        return result;
    };
    
    delShiftById = async (id) => {
        const result = await shiftManager.delShiftById(id);
        return result;
    };
    
    deleteMany = async (query) => {
        const result = await shiftManager.deleteMany(query);
        return result;
    };

};