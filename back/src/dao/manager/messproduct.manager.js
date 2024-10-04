import { messproductModel } from '../models/messproduct.model.js';

export default class MessProduct {

    newMessage = async (message) => {
        return await messproductModel.create(message);
    };

    getByType = async (country) => {
        return await messproductModel.find({ country: country }).lean().sort({ date: -1 });
    };

    getByTypeId = async (typeid) => {
        return await messproductModel.find({ typeId: typeid }).sort({ date: -1 }).lean();
    };

    getById = async (id) => {
        return await messproductModel.findById(id).lean();
    };

    update = async (message) => {
        return await messproductModel.findByIdAndUpdate(message._id, message, { new: true, lean: true });
    };

};