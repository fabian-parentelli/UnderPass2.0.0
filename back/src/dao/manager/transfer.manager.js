import { transferModel } from '../models/transfer.model.js';

export default class Transfer {

    newTransfer = async (transfer) => {
        return await transferModel.create(transfer);
    };
}