    import * as graphService from '../services/graph.service.js';
import { GraphNotFound } from '../utils/custom-exceptions.utils.js';

const bannerPrices = async (req, res) => {
    const { country } = req.params;
    try {
        const result = await graphService.bannerPrices(country);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof GraphNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { bannerPrices };