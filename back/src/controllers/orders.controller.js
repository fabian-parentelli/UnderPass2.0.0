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

export { newOrder };