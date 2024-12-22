import Router from './routes.js';
import * as shiftCustomerController from '../controllers/shiftCustomer.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class ShiftCustomerRouter extends Router {
    init() {
        this.get('/:uid', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, shiftCustomerController.getShiftCustomerByUserId);
    };
};