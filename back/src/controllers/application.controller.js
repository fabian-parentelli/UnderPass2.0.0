import * as appliService from '../services/application.service.js';
import { AppliNotFound } from '../utils/custom-exceptions.utils.js';

const appliBanner = async (req, res) => {
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await appliService.appliBanner({ ...req.body }, imagesUrl);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof AppliNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getBanners = async (req, res) => {
    const { limit = 12, page = 1, active, country, category, type, pay } = req.query;
    try {
        const result = await appliService.getBanners(limit, page, active, country, category, type, pay);
        if (result) return res.sendSuccess(result);
    } catch (error) {

        console.log(error); //--------------------------------Borrar-------------------------

        if (error instanceof AppliNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { appliBanner, getBanners };