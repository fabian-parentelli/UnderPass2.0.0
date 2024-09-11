import { transferPayManager } from '../dao/manager/index.manager.js';

export default class TransferPayRepository {

    newTransferPay = async (transfer) => {
        const result = await transferPayManager.newTransferPay(transfer);
        return result;
    };

    getTransfer = async (query, limit, page) => {
        const result = await transferPayManager.getTransfer(query, limit, page);
        return result;
    };
}