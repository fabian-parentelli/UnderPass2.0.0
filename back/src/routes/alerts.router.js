import Router from './routes.js';
import * as alertsController from '../controllers/alerts.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class AlertsRouter extends Router {
    init() {
        this.get('/', ['ADMIN', 'MASTER'], passportEnum.JWT, alertsController.getAll);
        this.get('/amount', ['ADMIN', 'MASTER'], passportEnum.JWT, alertsController.amount);
    };
};