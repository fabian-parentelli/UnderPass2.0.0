import * as alertsServices from '../services/alerts.service.js';
import { AllertsNotFound } from '../utils/custom-exceptions.utils.js';

const getAll = async (req, res) => {
    const { user } = req.user;
    try {
        const result = await alertsServices.getAll(user);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof AllertsNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const amount = async (req, res) => {
    try {
        const result = await alertsServices.amount();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof AllertsNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getByUser = async (req, res) => {
    const { limit = 20, page = 1, user } = req.query;
    try {
        const result = await alertsServices.getByUser(limit, page, user);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof AllertsNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updActive = async (req, res) => {
    try {
        const result = await alertsServices.updActive({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof AllertsNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { getAll, amount, updActive, getByUser };