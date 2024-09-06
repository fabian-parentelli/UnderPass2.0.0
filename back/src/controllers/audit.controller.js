import * as auditService from '../services/audit.service.js';
import { AuditNotFound } from '../utils/custom-exceptions.utils.js';

const getAll = async (req, res) => {
    
    try {
        const result = await auditService.getAll();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof AuditNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { getAll };