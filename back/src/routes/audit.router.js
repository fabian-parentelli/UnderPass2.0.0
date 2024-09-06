import Router from './routes.js';
import * as auditController from '../controllers/audit.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class AuditRouter extends Router {

    init() {
        this.get('/', ['ADMIN', 'MASTER'], passportEnum.JWT, auditController.getAll);
    };

};