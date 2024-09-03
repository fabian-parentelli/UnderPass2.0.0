import * as cashService from '../services/cash.service.js';
import { CashNotFound } from '../utils/custom-exceptions.utils.js';

const newCash = async (req, res) => {
    try {
        const result = await cashService.newCash({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof CashNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newCash };