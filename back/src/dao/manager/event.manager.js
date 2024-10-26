import { eventModel } from '../models/event.model.js';

export default class Event {

    newEvent = async (event) => {
        return await eventModel.create(event);
    };

    getNotConfirm = async (query) => {
        return await eventModel.findOne(query).lean();
    };

    getEvent = async (query, limit, page) => {
        return await eventModel.paginate(query, { limit, page, lean: true, sort: { startDate: 1 } });
    };

    getById = async (id) => {
        return await eventModel.findById(id).lean();
    };

    update = async (event) => {
        return await eventModel.findByIdAndUpdate(event._id, event, { lean: true, new: true });
    };

    eventDelete = async (id) => {
        return await eventModel.findByIdAndDelete(id);
    };

};