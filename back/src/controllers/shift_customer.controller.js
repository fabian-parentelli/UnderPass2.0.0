import * as shiftCustomerService from '../services/shift_customer.service.js';
import { ShiftNotFound } from '../utils/custom-exceptions.utils.js';

const getShiftCustomerByUserId = async (req, res) => {
    const { uid } = req.params;    
    try {
        const result = await shiftCustomerService.getShiftCustomerByUserId(uid);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ShiftNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { getShiftCustomerByUserId };