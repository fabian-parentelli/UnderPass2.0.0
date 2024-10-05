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
    const { page = 1, type, country, report } = req.query;
    try {
        const result = await messageService.getByType(page, type, country, report);
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

const rejects = async (req, res) => {
    try {
        const result = await messageService.rejects({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof MessageNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const active = async (req, res) => {
    try {
        const result = await messageService.active({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof MessageNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newMessage, getByTypeId, report, getByType, rejects, active };