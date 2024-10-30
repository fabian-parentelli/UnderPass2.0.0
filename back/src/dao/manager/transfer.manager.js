import { transferModel } from '../models/transfer.model.js';

export default class Transfer {

    newTransfer = async (transfer) => {
        return await transferModel.create(transfer);
    };

    getTrasfer = async (query, page) => {
        return await transferModel.paginate(query, { limit: 12, page, lean: true, sort: { date: -1 } });
    };

    getById = async (id) => {
        return await transferModel.findById(id).lean();
    };

    updTransfer = async (transfer) => {
        return await transferModel.findByIdAndUpdate(transfer._id, transfer, { lean: true, new: true });
    };
    
};