import { walletModel } from '../models/wallet.model.js';

export default class wallet {

    newWallet = async (wallet) => {
        return await walletModel.create(wallet);
    };

    getByUserId = async (id) => {
        return await walletModel.findOne({ userId: id }).lean();
    };

};