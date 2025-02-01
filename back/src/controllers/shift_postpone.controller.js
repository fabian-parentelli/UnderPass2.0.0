import * as postponeService from '../services/shift_postpone.service.js';
import { ShiftNotFound } from '../utils/custom-exceptions.utils.js';

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

export { denied };