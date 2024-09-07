import Router from './routes.js';
import * as orderPayController from '../controllers/orderPay.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class OrderPayRouter extends Router {
    init() {
        this.post('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, orderPayController.newOrder);
        this.get('/:id', ['ADMIN', 'MASTER'], passportEnum.JWT, orderPayController.getOrderById);
        this.get('/', ['ADMIN', 'MASTER'], passportEnum.JWT, orderPayController.getOrdersPay);
    };
};