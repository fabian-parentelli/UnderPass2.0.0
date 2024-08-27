import { walletManager } from '../dao/manager/index.manager.js';

export default class WalletRepository {

    newWallet = async (wallet) => {
        const result = await walletManager.newWallet(wallet);
        return result;
    };
    
    getByUserId = async (id) => {
        const result = await walletManager.getByUserId(id);
        return result;
    };

};