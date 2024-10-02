import { messnewsModel } from '../models/messnews.model.js';

export default class Messnews {

    newMessage = async (message) => {
        return await messnewsModel.create(message);
    };

    getByTypeId = async (typeid) => {
        return await messnewsModel.find({ typeId: typeid }).sort({ date: -1 }).lean();
    };

    allAmounts = async () => {
        return await messnewsModel.countDocuments().lean();
    };

    getById = async (id) => {
        return await messnewsModel.findById(id).lean();
    };

    update = async (message) => {
        return await messnewsModel.findByIdAndUpdate(message._id, message, { new: true, lean: true });
    };

};