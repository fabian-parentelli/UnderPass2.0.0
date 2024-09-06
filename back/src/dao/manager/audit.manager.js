import { auditModel } from '../models/audit.model.js';

export default class Application {

    newAudit = async (audit) => {
        return await auditModel.create(audit);
    };

    getAll = async () => {
        return await auditModel.find();
    };

};