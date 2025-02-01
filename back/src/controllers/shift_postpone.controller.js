import * as postponeService from '../services/shift_postpone.service.js';
import { ShiftNotFound } from '../utils/custom-exceptions.utils.js';

const newPostpone = async (req, res) => {
    try {
        const result = await postponeService.newPostpone({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {

        console.log(error);
        

        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getByAdminId = async (req, res) => {
    const { id, active } = req.params;
    try {
        const result = await postponeService.getByAdminId(id, active);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await postponeService.getById(id, { ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const activeByShiftId = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await postponeService.activeByShiftId(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const denied = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await postponeService.denied(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const active = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await postponeService.active(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const deleteAll = async (req, res) => {
    try {
        const result = await postponeService.deleteAll({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const deleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await postponeService.deleteById(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newPostpone, getByAdminId, getById, activeByShiftId, denied, active, deleteAll, deleteById };