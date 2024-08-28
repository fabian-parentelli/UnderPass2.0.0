import Router from './routes.js';
import * as orderController from '../controllers/orders.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class OrderRouter extends Router {
    init() {
        this.post('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, orderController.newOrder);
        this.get('/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, orderController.getOrderById);
        this.get('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, orderController.getOrders);
    };
};