import Router from './routes.js';
import * as messageController from '../controllers/messages.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class MessageRouter extends Router {
    init() {
        this.post('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, messageController.newMessage);
    };
};