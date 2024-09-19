import Router from './routes.js';
import * as tokenController from '../controllers/tokens.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class TokenRouter extends Router {
    init() {
        this.post('/recover_token', ['ADMIN', 'MASTER'], passportEnum.JWT, tokenController.recoverToken);
        this.get('/inter_pass/:id', ['ADMIN', 'MASTER'], passportEnum.NOTHING, tokenController.interPass);
        this.put('/new_password', ['ADMIN', 'MASTER'], passportEnum.JWT, tokenController.newPassword);
    };
};