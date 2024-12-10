import { isNotTime } from '../dao/DTOS/shift.dto.js';
import { shiftManager } from '../dao/manager/index.manager.js';

export default class ShiftRepository {

    newShift = async (shift) => {
        const result = await shiftManager.newShift(shift);
        return result;
    };

    getDataShift = async (query) => {
        const result = await shiftManager.getDataShift(query);
        if (result.length > 0) {
            const isTime = await isNotTime(result);
            return isTime;
        };
        return result;
    };

};