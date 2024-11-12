import { messsiteModel } from '../models/messsite.model.js';

export default class MessSite {

    newMessage = async (message) => {
        return await messsiteModel.create(message);
    };

    getByType = async (query, page) => {
        return await messsiteModel.paginate(query, { limit: 12, page, lean: true, sort: { date: -1 } });
    };

    getByTypeId = async (typeid) => {
        return await messsiteModel.find({ typeId: typeid, active: true }).sort({ date: -1 }).lean();
    };

    getById = async (id) => {
        return await messsiteModel.findById(id).lean();
    };

    update = async (message) => {
        return await messsiteModel.findByIdAndUpdate(message._id, message, { new: true, lean: true });
    };

};