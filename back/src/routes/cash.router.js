import Router from './routes.js';
import * as cashController from '../controllers/cash.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class CashRouter extends Router {
    init() {
        this.post('/', ['MASTER'], passportEnum.JWT, cashController.newCash);
        this.get('/last', ['ADMIN', 'MASTER'], passportEnum.JWT, cashController.getLast);
    };
};