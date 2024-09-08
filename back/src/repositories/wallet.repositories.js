import { walletManager, userManager } from '../dao/manager/index.manager.js';

export default class WalletRepository {

    newWallet = async (wallet) => {
        const result = await walletManager.newWallet(wallet);
        return result;
    };

    getByUserId = async (id) => {
        const result = await walletManager.getByUserId(id);
        return result;
    };

    getById = async (id) => {
        const result = await walletManager.getById(id);
        return result;
    };

    getWallets = async (query, limit, page) => {
        const result = await walletManager.getWallets(query, limit, page);
        for (const res of result.docs) {
            const user = await userManager.getUserById(res.userId);
            res.userData = {
                name: user.name,
                email: user.email,
                phone: user.phone || ''
            };
            res.money.sort((a, b) => b.date - a.date);
        };
        return result;
    };

    update = async (wallet) => {
        const result = await walletManager.update(wallet);
        return result;
    };

};