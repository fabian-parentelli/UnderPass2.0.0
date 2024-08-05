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

const getAll = async (req, res) => {
    const { limit = 12, page = 1, active, country, category, type, inPortal } = req.query;
    try {
        const result = await publicityService.getAll(limit, page, active, country, category, type, inPortal);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof PublicityNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updActive = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await publicityService.updActive(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof PublicityNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updPortal = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await publicityService.updPortal(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof PublicityNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updPublicity = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await publicityService.updPublicity({ ...req.body }, id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof PublicityNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newPublicity, getAll, updPublicity, updActive, updPortal };