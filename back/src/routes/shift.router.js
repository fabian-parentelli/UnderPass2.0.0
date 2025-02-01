import Router from './routes.js';
import * as shiftController from '../controllers/shift.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class ShiftRouter extends Router {
    init() {
        this.post('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, shiftController.newShift);
        this.get('/data', ['PUBLIC'], passportEnum.NOTHING, shiftController.getDataShift);
        this.get('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, shiftController.getShifts);
        this.put('/suspendpanel', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, shiftController.suspendPanel);
        this.put('/delallshift', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, shiftController.delAllShifts);
        this.put('/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, shiftController.updShift);
        this.delete('/shift/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, shiftController.delShiftById);
    };
};