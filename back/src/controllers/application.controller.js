import * as appliService from '../services/application.service.js';
import { AppliNotFound } from '../utils/custom-exceptions.utils.js';

const newApplication = async (req, res) => {
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await appliService.newApplication({ ...req.body }, imagesUrl);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof AppliNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getAll = async (req, res) => {
    const { limit = 12, page = 1, active, country, category, type, pay, underVew } = req.query;
    try {
        const result = await appliService.getAll(limit, page, active, country, category, type, pay, underVew);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof AppliNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await appliService.getById(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof AppliNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getByUserId = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await appliService.getByUserId(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof AppliNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updActive = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await appliService.updActive(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof AppliNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updVew = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await appliService.updVew(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof AppliNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newApplication, getAll, getByUserId, updActive, updVew, getById };