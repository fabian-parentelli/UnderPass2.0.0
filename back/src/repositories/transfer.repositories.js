import { transferManager } from '../dao/manager/index.manager.js';

export default class TransferRepository {

    newTransfer = async (transfer) => {
        const result = await transferManager.newTransfer(transfer);
        return result;
    };
}