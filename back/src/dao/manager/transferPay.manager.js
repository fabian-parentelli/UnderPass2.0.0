import { transferPayModel } from '../models/transferPay.model.js';

export default class TransferPay {

    newTransferPay = async (transfer) => {
        return await transferPayModel.create(transfer);
    };

    getTransfer = async (query, limit, page) => {
        return await transferPayModel.paginate(query, { limit, page, lean: true, sort: { date: -1 } })
    };

    getById = async (id) => {
        return await transferPayModel.findById(id).lean();
    };

};