import { cashModel } from '../models/cash.model.js';

export default class Cash_uru {

    newCash = async (cash) => {
        return await cashModel.create(cash);
    };

    getLast = async (country) => {
        return await cashModel.findOne({country: country}).sort({ date: -1 }).lean();
    };

    getAll = async (query, limit, page) => {
        return await cashModel.paginate(query, { limit, page, lean: true, sort: { date: -1 } });
    };

    update = async (cash) => {
        return await cashModel.findOneAndUpdate(cash._id, cash, { new: true, lean: true });
    };

};