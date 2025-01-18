import * as shiftconfService from '../services/shiftconf.service.js';
import { ShiftNotFound } from '../utils/custom-exceptions.utils.js';

const newShift = async (req, res) => {
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await shiftconfService.newShift({ ...req.body }, imagesUrl);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getPublicShiftconf = async (req, res) => {
    const { page = 1, limit, country, active, province, category, title, days, userid } = req.query;
    try {
        const result = await shiftconfService.getPublicShiftconf(page, limit, country, active, province, category, title, days, userid);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getShiftconfById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await shiftconfService.getShiftconfById(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getShiftconf = async (req, res) => {
    const { page = 1, limit, country, active, province, category, title, favorite, userid, days } = req.query;
    const { user } = req.user;
    try {
        const result = await shiftconfService.getShiftconf(page, limit, country, active, province, category, title, favorite, userid, days, user);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updActive = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await shiftconfService.updActive(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updHolidays = async (req, res) => {
    try {
        const result = await shiftconfService.updHolidays({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newShift, getShiftconf, getShiftconfById, getPublicShiftconf, updActive, updHolidays };