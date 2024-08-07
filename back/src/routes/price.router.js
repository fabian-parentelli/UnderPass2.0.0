import Router from './routes.js';
import * as priceController from '../controllers/price.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class PriceRouter extends Router {
    init() {
        this.post('/', ['MASTER'], passportEnum.JWT, priceController.newPrice);
        this.get('/last', ['PUBLIC'], passportEnum.NOTHING, priceController.getLastPrice);
        this.get('/exchange', ['PUBLIC'], passportEnum.NOTHING, priceController.exchange);
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, priceController.getAllPrice);
    };
};