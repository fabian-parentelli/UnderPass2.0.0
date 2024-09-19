import * as tokenService from '../services/token.service.js';
import { TokenNotFound } from '../utils/custom-exceptions.utils.js';

const recoverToken = async (req, res) => {
    try {
        const result = await tokenService.recoverToken({ ...req.body }, { ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof TokenNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { recoverToken };