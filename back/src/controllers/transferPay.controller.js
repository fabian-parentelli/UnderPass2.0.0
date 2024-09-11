import * as transferPayService from '../services/transferPay.service.js';
import { TransferNotFound } from '../utils/custom-exceptions.utils.js';

const newTransferPay = async (req, res) => {
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await transferPayService.newTransferPay(imagesUrl, { ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof TransferNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await transferPayService.getById(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof TransferNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getTransfer = async (req, res) => {
    const { page = 1, limit = 12, userid, pay, country } = req.query;
    try {
        const result = await transferPayService.getTransfer(page, limit, userid, pay, country);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof TransferNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newTransferPay, getTransfer, getById };