import * as orderSellerService from '../services/orderSeller.service.js';
import { OrderSellerNotFound } from '../utils/custom-exceptions.utils.js';

const getToPay = async (req, res) => {
    const { page } = req.params;
    try {
        const result = await orderSellerService.getToPay(page);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof OrderSellerNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getOrders = async (req, res) => {
    const { page = 1, limit = 12, userid, active, payIn, payOut, id } = req.query;
    try {
        const result = await orderSellerService.getOrders(page, limit, userid, active, payIn, payOut, id, { ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof OrderSellerNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { getToPay, getOrders };