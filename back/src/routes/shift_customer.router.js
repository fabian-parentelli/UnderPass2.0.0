import Router from './routes.js';
import * as shiftCustomerController from '../controllers/shift_customer.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class ShiftCustomerRouter extends Router {
    init() {
        this.get('/:uid', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, shiftCustomerController.getShiftCustomerByUserId);
    };
};