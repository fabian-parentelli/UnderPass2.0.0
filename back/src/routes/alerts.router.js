import Router from './routes.js';
import * as alertsController from '../controllers/alerts.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class AlertsRouter extends Router {
    init() {
        this.get('/amount', ['ADMIN', 'MASTER'], passportEnum.JWT, alertsController.amount);
        this.get('/userid', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, alertsController.getByUser);
        this.get('/', ['PUBLIC'], passportEnum.JWT, alertsController.getAll);
        this.put('/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, alertsController.updActive);
    };
};