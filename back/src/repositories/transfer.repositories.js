import { transferManager, userManager } from '../dao/manager/index.manager.js';

export default class TransferRepository {

    newTransfer = async (transfer) => {
        const result = await transferManager.newTransfer(transfer);
        return result;
    };

    getTrasfer = async (query, page) => {
        const result = await transferManager.getTrasfer(query, page);
        for (const data of result.docs) {
            const user = await userManager.getUserById(data.userId);
            data.userData = {
                name: user.name,
                email: user.email,
                phone: user.phone || null,
            };
        };
        return result;
    };
}