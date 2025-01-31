import * as priceService from '../services/prices.service.js';
import { PriceNotFound } from '../utils/custom-exceptions.utils.js';

const newDataPass = async (req, res) => {
    try {
        const result = await priceService.newDataPass({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof PriceNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const newPrice = async (req, res) => {
    try {
        const result = await priceService.newPrice({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof PriceNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getLastPrice = async (req, res) => {
    const { country, name } = req.query;
    try {
        const result = await priceService.getLastPrice(country, name);
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

const getMaxCounterByType = async (req, res) => {
    const { type } = req.params;
    try {
        const result = await priceService.getMaxCounterByType(type);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof PriceNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getDataPass = async (req, res) => {
    const { country } = req.params;
    try {
        const result = await priceService.getDataPass(country);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof PriceNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updMaxCount = async (req, res) => {
    try {
        const result = await priceService.updMaxCount({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof PriceNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updDataPass = async (req, res) => {
    try {
        const result = await priceService.updDataPass({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof PriceNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getAllPrice = async (req, res) => {
    try {
        const result = await priceService.getAllPrice();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof PriceNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { 
    newPrice, getLastPrice, exchange, getAllPrice, newDataPass, getDataPass, updDataPass, updMaxCount,
    getMaxCounterByType 
};