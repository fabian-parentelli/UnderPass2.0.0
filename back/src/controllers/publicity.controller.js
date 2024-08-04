import * as publicityService from '../services/publicity.service.js';
import { PublicityNotFound } from '../utils/custom-exceptions.utils.js';

const newPublicity = async (req, res) => {
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await publicityService.newPublicity({ ...req.body }, imagesUrl);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof PublicityNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newPublicity };