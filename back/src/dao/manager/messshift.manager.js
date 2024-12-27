import { messshiftModel } from '../models/messshift.model.js';

export default class MessShift {

    newMessage = async (message) => {
        return await messshiftModel.create(message);
    };

    getByType = async (query, page) => {
        return await messshiftModel.paginate(query, { limit: 12, page, lean: true, sort: { date: -1 } });
    };

    getByTypeId = async (typeid) => {
        return await messshiftModel.find({ typeId: typeid, active: true }).sort({ date: -1 }).lean();
    };

    getById = async (id) => {
        return await messshiftModel.findById(id).lean();
    };

    update = async (message) => {
        return await messshiftModel.findByIdAndUpdate(message._id, message, { new: true, lean: true });
    };

};