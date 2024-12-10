import Router from './routes.js';
import * as shiftController from '../controllers/shift.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class ShiftRouter extends Router {
    init() {
        this.post('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, shiftController.newShift);
        this.get('/data', ['PUBLIC'], passportEnum.NOTHING, shiftController.getDataShift);
    };
};