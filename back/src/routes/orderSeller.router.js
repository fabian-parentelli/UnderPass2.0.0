import Router from './routes.js';
import * as orderSellerController from '../controllers/orderSeller.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class OrderSellerRouter extends Router {
    init() {
        this.get('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, orderSellerController.getOrders);
    };
};