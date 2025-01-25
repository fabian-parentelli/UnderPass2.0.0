import Router from './routes.js';
import * as shiftController from '../controllers/shift.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class ShiftRouter extends Router {
    init() {
        this.post('/postpone', ['USER', 'ADMIN', , 'MASTER'], passportEnum.JWT, shiftController.newPostpone);
        this.post('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, shiftController.newShift);
        this.get('/data', ['PUBLIC'], passportEnum.NOTHING, shiftController.getDataShift);
        this.get('/postpones/:id/active/:active', ['USER', 'ADMIN', , 'MASTER'], passportEnum.JWT, shiftController.getPostponeByAdminId);
        this.get('/postponeid/:id', ['USER', 'ADMIN', , 'MASTER'], passportEnum.JWT, shiftController.getPostponeById);
        this.get('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, shiftController.getShifts);
        this.put('/suspend/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, shiftController.suspend);
        this.put('/activepostpone/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, shiftController.activePostpone);
        this.put('/suspendpanel', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, shiftController.suspendPanel);
        this.put('/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, shiftController.updShift);
    };
};