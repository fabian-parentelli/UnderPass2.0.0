import { auditManager } from '../dao/manager/index.manager.js';

export default class AuditRepository {

    newAudit = async (audit) => {
        const result = await auditManager.newAudit(audit);
        return result;
    };
    
    getAll = async () => {
        const result = await auditManager.getAll();
        return result;
    };
    
};