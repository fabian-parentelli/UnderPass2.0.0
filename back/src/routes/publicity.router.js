import Router from './routes.js';
import * as publicityController from '../controllers/publicity.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.conf.js'
import { uploadToCloudinary } from '../config/cloudinary.config.js';

export default class PublicitynRouter extends Router {
    init() {
        this.post('/', ['ADMIN', 'MASTER'], passportEnum.JWT, multipleUploader, uploadToCloudinary, publicityController.newPublicity);
    };
};