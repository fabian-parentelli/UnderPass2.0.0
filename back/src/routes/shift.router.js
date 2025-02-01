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
        this.put('/activepostpone/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, shiftController.activePostpone);
        this.put('/actpostbyshid/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, shiftController.actPostByShId);
        this.put('/suspendpanel', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, shiftController.suspendPanel);
        this.put('/delallpost', ['ADMIN', 'MASTER'], passportEnum.JWT, shiftController.delAllpostpones);
        this.put('/delallshift', ['ADMIN', 'MASTER'], passportEnum.JWT, shiftController.delAllShifts);
        this.put('/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, shiftController.updShift);
        this.delete('/shift/:id', ['ADMIN', 'MASTER'], passportEnum.JWT, shiftController.delShiftById);
        this.delete('/:id', ['ADMIN', 'MASTER'], passportEnum.JWT, shiftController.delPostponeById);
    };
};