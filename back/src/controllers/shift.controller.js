import * as shiftService from '../services/shif.service.js';
import { ShiftNotFound } from '../utils/custom-exceptions.utils.js';

const newShift = async (req, res) => {
    try {
        const result = await shiftService.newShift({ ...req.body }, { ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
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
    const { uid, month, year, customer, usercustomer, id, active, place } = req.query;
    const { user } = req.user;
    try {
        const result = await shiftService.getShifts(uid, month, year, customer, usercustomer, user, id, active, place);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const suspendPanel = async (req, res) => {
    try {
        const result = await shiftService.suspendPanel({ ...req.body }, { ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const actPostByShId = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await shiftService.actPostByShId(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updShift = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await shiftService.updShift(id, { ...req.body }, { ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const delShiftById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await shiftService.delShiftById(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const delAllShifts = async (req, res) => {    
    try {
        const result = await shiftService.delAllShifts({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export {
    newShift, getDataShift, getShifts,
    updShift, suspendPanel, actPostByShId, delShiftById,
    delAllShifts
};