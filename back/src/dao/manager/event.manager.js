import { eventModel } from '../models/event.model.js';

export default class Event {

    newEvent = async (event) => {
        return await eventModel.create(event);
    };

    getNotConfirm = async (query) => {
        return await eventModel.findOne(query).lean();
    };

};