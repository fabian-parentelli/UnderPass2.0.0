import Router from './routes.js';
import * as postponeController from '../controllers/shift_postpone.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class PostponeRouter extends Router {

    init() {
        this.post('/', ['USER', 'ADMIN', , 'MASTER'], passportEnum.JWT, postponeController.newPostpone);
        this.get('/byadminid/:id/active/:active', ['USER', 'ADMIN', , 'MASTER'], passportEnum.JWT, postponeController.getByAdminId);
        this.get('/:id', ['USER', 'ADMIN', , 'MASTER'], passportEnum.JWT, postponeController.getById);
        this.put('/active/shift/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, postponeController.activeByShiftId);
        this.put('/denied/:id', ['USER', 'ADMIN', , 'MASTER'], passportEnum.JWT, postponeController.denied);
        this.put('/active/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, postponeController.active);
        this.put('/deleteall', ['ADMIN', 'MASTER'], passportEnum.JWT, postponeController.deleteAll);
        this.delete('/:id', ['ADMIN', 'MASTER'], passportEnum.JWT, postponeController.deleteById);
    };
};