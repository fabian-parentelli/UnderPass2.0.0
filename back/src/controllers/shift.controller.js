import * as shiftService from '../services/shif.service.js';
import { ShiftNotFound } from '../utils/custom-exceptions.utils.js';

const newShift = async (req, res) => {
    try {
        const result = await shiftService.newShift({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {

        console.log(error);

        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getDataShift = async (req, res) => {
    const { uid, month, year, day, room, sections } = req.query;
    try {
        const result = await shiftService.getDataShift(uid, month, year, day, room, sections);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getShifts = async (req, res) => {
    const { uid, month, year, customer, usercustomer } = req.query;
    const { user } = req.user;
    try {
        const result = await shiftService.getShifts(uid, month, year, customer, usercustomer, user);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newShift, getDataShift, getShifts };