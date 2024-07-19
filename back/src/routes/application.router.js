import Router from './routes.js';
import * as appliController from '../controllers/application.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.conf.js'
import { uploadToCloudinary } from '../config/cloudinary.config.js';

export default class AppliRouter extends Router {
    init() {
        this.post('/banner', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, multipleUploader, uploadToCloudinary, appliController.appliBanner);
    };
};

// solicitud de banners.
// solicitud de publicidad.
//      * Cards.
//      * Separador.