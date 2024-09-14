import * as payService from '../services/pay.service.js';
import { PayNotFound } from '../utils/custom-exceptions.utils.js';

const newUnderPay = async (req, res) => {
    try {
        const result = await payService.newUnderPay({ ...req.body }, { ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof PayNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newUnderPay };