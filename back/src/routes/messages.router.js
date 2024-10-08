import Router from './routes.js';
import * as messageController from '../controllers/messages.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class MessageRouter extends Router {
    init() {
        this.post('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, messageController.newMessage);
        this.get('/type/:type/typeid/:typeid', ['PUBLIC'], passportEnum.NOTHING, messageController.getByTypeId);
        this.get('/:id/type/:type', ['ADMIN', 'MASTER'], passportEnum.JWT, messageController.getById);
        this.get('/', ['ADMIN', 'MASTER'], passportEnum.JWT, messageController.getByType);
        this.put('/report', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, messageController.report);
        this.put('/rejects', ['ADMIN', 'MASTER'], passportEnum.JWT, messageController.rejects);
        this.put('/active', ['ADMIN', 'MASTER'], passportEnum.JWT, messageController.active);
    };
};