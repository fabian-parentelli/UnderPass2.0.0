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

const getByUserId = async (req, res) => {
    const { id, active } = req.params;
    try {
        const result = await publicityService.getByUserId(id, active);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof PublicityNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getBanner = async (req, res) => {
    const { country } = req.params;
    try {
        const result = await publicityService.getBanner(country);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof PublicityNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getAmountInPortal = async (req, res) => {
    try {
        const result = await publicityService.getAmountInPortal();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof PublicityNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await publicityService.getById(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof PublicityNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getAll = async (req, res) => {
    const { limit = 12, page = 1, active, country, category, type, inPortal, id } = req.query;
    try {
        const result = await publicityService.getAll(limit, page, active, country, category, type, inPortal, id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof PublicityNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updUserVew = async (req, res) => {
    const { user } = req.user;
    try {
        const result = await publicityService.updUserVew(user);
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

export {
    newPublicity, getAll, updPublicity, updActive, updPortal, updUserVew, getByUserId,
    getAmountInPortal, getBanner, getById
};