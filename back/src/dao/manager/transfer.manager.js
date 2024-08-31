import { transferModel } from '../models/transfer.model.js';

export default class Transfer {

    newTransfer = async (transfer) => {
        return await transferModel.create(transfer);
    };

    getTrasfer = async (query, page) => {
        return await transferModel.paginate(query, { limit: 12, page, lean: true, sort: { date: -1 } });
    };
}