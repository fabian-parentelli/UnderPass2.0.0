import Router from './routes.js';
import * as codeRouter from '../controllers/code.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class CodeRouter extends Router {
    init() {
        this.post('/', ['MASTER'], passportEnum.JWT, codeRouter.newCode);
        this.get('/:name', ['MASTER'], passportEnum.JWT, codeRouter.getCodes);
        this.put('/', ['MASTER'], passportEnum.JWT, codeRouter.updCodes);
    };
};