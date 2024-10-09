import { eventManager } from '../dao/manager/index.manager.js';

export default class EventRepository {

    newEvent = async (event) => {
        const result = await eventManager.newEvent(event);
        return result;
    };
    
    getNotConfirm = async (query) => {
        const result = await eventManager.getNotConfirm(query);
        return result;
    };

};