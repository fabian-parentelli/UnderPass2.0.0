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

const getMoneyByUserId = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await walletService.getMoneyByUserId(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof WalletNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getWallets = async (req, res) => {
    const { page = 1, limit = 12, country, inWallet, reqMoney } = req.query;
    try {
        const result = await walletService.getWallets(page, limit, country , inWallet, reqMoney);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof OrderSellerNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updIsWallet = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await walletService.updIsWallet(id, { ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof WalletNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newWallet, getByUserId, getMoneyByUserId, getWallets, updIsWallet };