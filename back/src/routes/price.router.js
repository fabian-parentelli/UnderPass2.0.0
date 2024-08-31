import Router from './routes.js';
import * as priceController from '../controllers/price.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class PriceRouter extends Router {
    init() {
        this.post('/datapass', ['ADMIN', 'MASTER'], passportEnum.JWT, priceController.newDataPass);
        this.post('/', ['MASTER'], passportEnum.JWT, priceController.newPrice);
        this.get('/last', ['PUBLIC'], passportEnum.NOTHING, priceController.getLastPrice);
        this.get('/exchange', ['PUBLIC'], passportEnum.NOTHING, priceController.exchange);
        this.get('/:country', ['PUBLIC'], passportEnum.NOTHING, priceController.getDataPass);
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, priceController.getAllPrice);
        this.put('/', ['ADMIN', 'MASTER'], passportEnum.JWT, priceController.updDataPass);
    };
};