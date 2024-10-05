import { messnewsModel } from '../models/messnews.model.js';

export default class Messnews {

    newMessage = async (message) => {
        return await messnewsModel.create(message);
    };

    getByType = async (query, page) => {
        return await messnewsModel.paginate(query, { limit: 12, page, lean: true, sort: { date: -1 } });
    };

    getByTypeId = async (typeid) => {
        return await messnewsModel.find({ typeId: typeid, active: true }).sort({ date: -1 }).lean();
    };

    getById = async (id) => {
        return await messnewsModel.findById(id).lean();
    };

    update = async (message) => {
        return await messnewsModel.findByIdAndUpdate(message._id, message, { new: true, lean: true });
    };

};