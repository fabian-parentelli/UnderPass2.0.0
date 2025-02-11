import Router from './routes.js';
import * as walletController from '../controllers/wallet.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class WalleTRouter extends Router {
    init() {




        this.post('/', ['MASTER', 'ADMIN'], passportEnum.JWT, walletController.newWallet);
        this.get('/user/:id', ['USER', 'MASTER', 'ADMIN'], passportEnum.JWT, walletController.getByUserId);
        this.get('/money/:id', ['USER', 'MASTER', 'ADMIN'], passportEnum.JWT, walletController.getMoneyByUserId);
        this.get('/', ['ADMIN', 'MASTER'], passportEnum.JWT, walletController.getWallets);
        this.put('/iswallet/:id', ['USER', 'MASTER', 'ADMIN'], passportEnum.JWT, walletController.updIsWallet);
    };
};