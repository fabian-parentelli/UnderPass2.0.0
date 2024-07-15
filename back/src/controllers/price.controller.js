import * as priceService from '../services/prices.service.js';
import { PriceNotFound } from '../utils/custom-exceptions.utils.js';

const newBannerPrice = async (req, res) => {
    try {
        const result = await priceService.newBannerPrice({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof PriceNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getLastBanner = async (req, res) => {
    const { country } = req.params;
    try {
        const result = await priceService.getLastBanner(country);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof PriceNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const exchange = async (req, res) => {
    try {
        const result = await priceService.exchange();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof PriceNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getListPrice = async (req, res) => {
    const { country } = req.params;
    try {
        const result = await priceService.getListPrice(country);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof PriceNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newBannerPrice, getLastBanner, exchange, getListPrice };