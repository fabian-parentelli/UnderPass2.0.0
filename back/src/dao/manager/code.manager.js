import { codesModelSecondary } from '../models/code.model.js';

export default class Cash_uru {

    newCode = async (cash) => {
        return await codesModelSecondary.create(cash);
    };

    getCodes = async (name) => {
        return await codesModelSecondary.findOne({ name: { $regex: name, $options: "i" } }).lean();
    };

    getCodeById = async (id) => {
        return await codesModelSecondary.findById(id).lean();
    };

    update = async (code) => {
        return await codesModelSecondary.findByIdAndUpdate(code._id, code, { new: true, lean: true });
    };

};