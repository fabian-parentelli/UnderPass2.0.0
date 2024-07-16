import Router from './routes.js';
import * as priceController from '../controllers/price.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class PriceRouter extends Router {
    init() {
        this.post('/banner', ['MASTER'], passportEnum.JWT, priceController.newBannerPrice);
        this.get('/lastbanner/:country', ['PUBLIC'], passportEnum.NOTHING, priceController.getLastBanner);
        this.get('/exchange', ['PUBLIC'], passportEnum.NOTHING, priceController.exchange);
        this.get('/:country', ['ADMIN', 'MASTER'], passportEnum.JWT, priceController.getListPrice);
    };
};