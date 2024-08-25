import * as orderService from '../services/orders.service.js';
import { OrderNotFound } from '../utils/custom-exceptions.utils.js';

const newOrder = async (req, res) => {
    try {
        const result = await orderService.newOrder({ ...req.body }, { ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof OrderNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getOrders = async (req, res) => {
    const { page = 1, limit = 12, userid, active } = req.query;
    try {
        const result = await orderService.getOrders(page, limit, userid, active);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof OrderNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newOrder, getOrders };