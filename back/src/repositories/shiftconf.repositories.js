import { shiftconfManager } from '../dao/manager/index.manager.js';

export default class ShiftconfRepository {

    newShift = async (shift) => {
        const result = await shiftconfManager.newShift(shift);
        return result;
    };
};