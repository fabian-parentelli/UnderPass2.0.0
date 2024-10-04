import * as messageService from '../services/message.service.js';
import { MessageNotFound } from '../utils/custom-exceptions.utils.js';

const newMessage = async (req, res) => {
    try {
        const result = await messageService.newMessage({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof MessageNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getByType = async (req, res) => {
    const { type, country } = req.params;
    try {
        const result = await messageService.getByType(type, country);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof MessageNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getByTypeId = async (req, res) => {
    const { type, typeid } = req.params;
    try {
        const result = await messageService.getByTypeId(type, typeid);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof MessageNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const report = async (req, res) => {
    try {
        const result = await messageService.report({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof MessageNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newMessage, getByTypeId, report, getByType };