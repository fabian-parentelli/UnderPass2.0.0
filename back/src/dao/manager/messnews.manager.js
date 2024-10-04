import { messnewsModel } from '../models/messnews.model.js';

export default class Messnews {

    newMessage = async (message) => {
        return await messnewsModel.create(message);
    };

    getByType = async (country) => {
        return await messnewsModel.find({ country: country }).lean().sort({ date: -1 });
    };

    getByTypeId = async (typeid) => {
        return await messnewsModel.find({ typeId: typeid }).sort({ date: -1 }).lean();
    };

    getById = async (id) => {
        return await messnewsModel.findById(id).lean();
    };

    update = async (message) => {
        return await messnewsModel.findByIdAndUpdate(message._id, message, { new: true, lean: true });
    };

};