import { messeventModel } from '../models/messevent.model.js';

export default class MessEvent {

    newMessage = async (message) => {
        return await messeventModel.create(message);
    };

    getByType = async (query, page) => {
        return await messeventModel.paginate(query, { limit: 12, page, lean: true, sort: { date: -1 } });
    };

    getByTypeId = async (typeid) => {
        return await messeventModel.find({ typeId: typeid, active: true }).sort({ date: -1 }).lean();
    };

    getById = async (id) => {
        return await messeventModel.findById(id).lean();
    };

    update = async (message) => {
        return await messeventModel.findByIdAndUpdate(message._id, message, { new: true, lean: true });
    };

}