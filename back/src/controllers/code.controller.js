import * as codeService from '../services/code.service.js';
import { CodeNotFound } from '../utils/custom-exceptions.utils.js';

const newCode = async (req, res) => {
    try {
        const result = await codeService.newCode({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof CodeNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getCodes = async (req, res) => {
    const { name, type, page = 1 } = req.query;
    try {
        const result = await codeService.getCodes(name, type, page);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof CodeNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newCode, getCodes };