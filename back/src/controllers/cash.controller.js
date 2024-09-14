import * as cashService from '../services/cash.service.js';
import { CashNotFound } from '../utils/custom-exceptions.utils.js';

const newCash = async (req, res) => {
    try {
        const result = await cashService.newCash();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof CashNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getLast = async (req, res) => {
    try {
        const result = await cashService.getLast();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof CashNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getAll = async (req, res) => {
    const { page = 1, limit = 12, userid, country, inOut, type, date } = req.query;
    try {
        const result = await cashService.getAll(page, limit, userid, country, inOut, type, date);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof TransferNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newCash, getLast, getAll };