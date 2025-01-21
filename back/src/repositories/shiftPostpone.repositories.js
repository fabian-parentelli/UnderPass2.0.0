import { shiftconfManager, shiftPostponeManager } from '../dao/manager/index.manager.js';

export default class ShiftPostponeRepository {

    newPostpone = async (shift) => {
        const result = await shiftPostponeManager.newPostpone(shift);
        return result;
    };
    
    getById = async (id) => {
        const result = await shiftPostponeManager.getById(id);
        if(result.to === 'customer') {
            const config = await shiftconfManager.getByUserId(result.shiftId.userId);
            result.shiftId.place = config.title;
            result.shiftId.img = config.img.url;
        };
        return result;
    };
};