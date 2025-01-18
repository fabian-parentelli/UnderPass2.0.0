import { shiftconfManager } from '../dao/manager/index.manager.js';
import { updHolidaysDate } from '../dao/DTOS/shiftConfig.dto.js';

export default class ShiftconfRepository {

    newShift = async (shift) => {
        const result = await shiftconfManager.newShift(shift);
        return result;
    };

    getShiftconf = async (query, page, limit) => {
        const preResult = await shiftconfManager.getShiftconf(query, page, limit);
        const result = await updHolidaysDate(preResult);
        return result;
    };

    getByUserId = async (userId) => {
        const result = await shiftconfManager.getByUserId(userId);
        return result;
    };

    getById = async (id) => {
        const preResult = await shiftconfManager.getById(id);
        const result = await updHolidaysDate(preResult)
        return result;
    };

    update = async (shift) => {
        const result = await shiftconfManager.update(shift);
        return result;
    };

};