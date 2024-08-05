import Router from './routes.js';
import * as publicityController from '../controllers/publicity.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.conf.js'
import { uploadToCloudinary } from '../config/cloudinary.config.js';

export default class PublicitynRouter extends Router {
    init() {
        this.post('/', ['ADMIN', 'MASTER'], passportEnum.JWT, multipleUploader, uploadToCloudinary, publicityController.newPublicity);
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, publicityController.getAll);
        this.put('/active/:id', ['ADMIN', 'MASTER'], passportEnum.JWT, publicityController.updActive);
        this.put('/portal/:id', ['ADMIN', 'MASTER'], passportEnum.JWT, publicityController.updPortal);
        this.put('/:id', ['ADMIN', 'MASTER'], passportEnum.JWT, publicityController.updPublicity);
    };
};