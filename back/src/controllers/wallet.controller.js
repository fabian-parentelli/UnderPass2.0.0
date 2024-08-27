import * as walletService from '../services/wallet.service.js';
import { WalletNotFound } from '../utils/custom-exceptions.utils.js';

const newWallet = async (req, res) => {
    try {
        const result = await walletService.newWallet({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof WalletNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getByUserId = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await walletService.getByUserId(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof WalletNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newWallet, getByUserId };