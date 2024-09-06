import { auditRepository } from "../repositories/index.repositories.js";
import { AuditNotFound } from '../utils/custom-exceptions.utils.js';

const getAll = async () => {
    
    const result = await auditRepository.getAll();
    if (!result) throw new AuditNotFound('No se puede guardar la solicitud');
    return { status: 'success', result };
};

export { getAll };