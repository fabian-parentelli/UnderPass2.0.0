import Router from './routes.js';
import * as transferPayController from '../controllers/transferPay.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.conf.js'
import { uploadToCloudinary } from '../config/cloudinary.config.js';

export default class TransferPayRouter extends Router {
    init() {
        this.post('/', ['ADMIN', 'MASTER'], passportEnum.JWT, multipleUploader, uploadToCloudinary, transferPayController.newTransferPay);
        this.get('/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, transferPayController.getById);
        this.get('/', ['ADMIN', 'MASTER'], passportEnum.JWT, transferPayController.getTransfer);
    };
};