import Router from './routes.js';
import * as appliController from '../controllers/application.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.conf.js'
import { uploadToCloudinary } from '../config/cloudinary.config.js';

export default class AppliRouter extends Router {
    init() {
        this.post('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, multipleUploader, uploadToCloudinary, appliController.newApplication);
        this.get('/all', ['ADMIN', 'MASTER'], passportEnum.JWT, appliController.getAll);
        this.get('/userid/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, appliController.getByUserId);
        this.get('/id/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, appliController.getById);
        this.put('/active/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, appliController.updActive);
        this.put('/vew/:id', ['ADMIN', 'MASTER'], passportEnum.JWT, appliController.updVew);
    };
};