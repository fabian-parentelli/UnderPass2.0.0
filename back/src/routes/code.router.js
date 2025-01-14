import Router from './routes.js';
import * as codeRouter from '../controllers/code.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class CodeRouter extends Router {
    init() {
        this.post('/', ['MASTER'], passportEnum.JWT, codeRouter.newCode);
        this.get('/', ['MASTER'], passportEnum.JWT, codeRouter.getCodes);
    };
};