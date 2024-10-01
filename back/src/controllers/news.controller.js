import * as newsService from '../services/news.service.js';
import { NewsNotFound } from '../utils/custom-exceptions.utils.js';

const createNews = async (req, res) => {
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await newsService.createNews(imagesUrl, { ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof NewsNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await newsService.getById(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof NewsNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getAll = async (req, res) => {
    const {
        page = 1, limit = 12, active, id, country, province, city, publicity, title, provinceSort, citySort
    } = req.query;
    try {
        const result = await newsService.getAll(page, limit, active, id, country, province, city, publicity, title, provinceSort, citySort);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof NewsNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updActive = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await newsService.updActive(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof NewsNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updNews = async (req, res) => {
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await newsService.updNews(imagesUrl, { ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof NewsNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { createNews, getById, getAll, updActive, updNews };