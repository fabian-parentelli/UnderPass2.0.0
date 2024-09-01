import Router from './routes.js';
import * as transferController from '../controllers/transfer.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.conf.js'
import { uploadToCloudinary } from '../config/cloudinary.config.js';

export default class TransferRouter extends Router {
    init() {
        this.post('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, multipleUploader, uploadToCloudinary, transferController.newTransfer);
        this.get('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, transferController.getTrasfer);    
        this.put('/:id', ['ADMIN', 'MASTER'], passportEnum.JWT, multipleUploader, uploadToCloudinary, transferController.updTransfer);
    };
};