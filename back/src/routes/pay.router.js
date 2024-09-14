import Router from './routes.js';
import * as payController from '../controllers/pay.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class PayRouter extends Router {
    init() {
        this.post('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, payController.newUnderPay);
    };
};