import * as transferService from '../services/transfer.service.js';
import { TransferNotFound } from '../utils/custom-exceptions.utils.js';

const newTransfer = async (req, res) => {
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await transferService.newTransfer(imagesUrl, { ...req.body }, { ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof TransferNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getTrasfer = async (req, res) => {
    const { confirm, user, page, country, type, id } = req.query;
    try {
        const result = await transferService.getTrasfer(confirm, user, page, country, type, id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof TransferNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const confirm = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await transferService.confirm(id, { ...req.body }, { ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof TransferNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updTransfer = async (req, res) => {
    const imagesUrl = req.cloudinaryUrls;
    const { id } = req.params;
    try {
        const result = await transferService.updTransfer(imagesUrl, { ...req.body }, id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof TransferNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newTransfer, getTrasfer, confirm, updTransfer };