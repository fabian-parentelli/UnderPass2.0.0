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

export { newEvent, getNotConfirm };