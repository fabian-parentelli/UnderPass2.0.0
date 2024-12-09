import { shiftconfManager } from '../dao/manager/index.manager.js';

export default class ShiftconfRepository {

    newShift = async (shift) => {
        const result = await shiftconfManager.newShift(shift);
        return result;
    };

    getShiftconf = async (query, page, limit) => {
        const result = await shiftconfManager.getShiftconf(query, page, limit);       
        return result;
    };
    
    getById = async (id) => {
        const result = await shiftconfManager.getById(id);
        return result;
    };

    update = async (shift) => {
        const result = await shiftconfManager.update(shift);
        return result;
    };

};