import Router from './routes.js';
import * as eventController from '../controllers/event.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class EventRouter extends Router {
    init() {
        this.post('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, eventController.newEvent);
        this.get('/:uid', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, eventController.getNotConfirm);
    };
};