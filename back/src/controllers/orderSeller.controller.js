import * as orderSellerService from '../services/orderSeller.service.js';
import { OrderSellerNotFound } from '../utils/custom-exceptions.utils.js';

const getOrders = async (req, res) => {
    const { page = 1, limit = 12, userid, active, payIn, payOut } = req.query;
    try {
        const result = await orderSellerService.getOrders(page, limit, userid, active, payIn, payOut, { ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof OrderSellerNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { getOrders };