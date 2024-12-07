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

export { newShift };