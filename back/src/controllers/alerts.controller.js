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

export { getAll };