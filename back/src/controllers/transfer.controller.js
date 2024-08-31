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
    const { confirm, user, page, country } = req.query;
    try {
        const result = await transferService.getTrasfer(confirm, user, page, country);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof TransferNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newTransfer, getTrasfer };