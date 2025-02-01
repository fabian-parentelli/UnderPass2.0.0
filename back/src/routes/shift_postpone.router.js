import Router from './routes.js';
import * as postponeController from '../controllers/shift_postpone.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class PostponeRouter extends Router {

    init() {
        this.put('/denied/:id', ['USER', 'ADMIN', , 'MASTER'], passportEnum.JWT, postponeController.denied);
    };

};