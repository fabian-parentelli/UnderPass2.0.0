import * as eventService from '../services/event.service.js';
import { EventNotFound } from '../utils/custom-exceptions.utils.js';

const newEvent = async (req, res) => {
    try {
        const result = await eventService.newEvent({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof EventNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const newImg = async (req, res) => {
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await eventService.newImg(imagesUrl, { ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof EventNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const newPreset = async (req, res) => {
    try {
        const result = await eventService.newPreset({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof EventNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getNotConfirm = async (req, res) => {
    const { uid } = req.params;
    try {
        const result = await eventService.getNotConfirm(uid);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof EventNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getEventById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await eventService.getEventById(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof EventNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getEventPublic = async (req, res) => {
    const { page = 1, limit = 12, active, country, publicity, category, province, startdate, title } = req.query;
    try {
        const result = await eventService.getEventPublic(page, limit, active, country, publicity, category, province, startdate, title);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof EventNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getEvent = async (req, res) => {
    const { page = 1, limit = 12, active, country, publicity, userid, category, province, startdate, title, favorite } = req.query;
    try {
        const result = await eventService.getEvent(
            { ...req.user }, page, limit, active, country, publicity, userid, category, province, startdate, title, favorite
        );
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof EventNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updActive = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await eventService.updActive(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof EventNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const confirm = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await eventService.confirm(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof EventNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const putEvent = async (req, res) => {
    try {
        const result = await eventService.putEvent({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof EventNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export {
    newEvent, newImg, getEvent, getNotConfirm, putEvent, newPreset, confirm, getEventPublic, updActive, getEventById
};