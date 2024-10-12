import Router from './routes.js';
import * as eventController from '../controllers/event.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.conf.js';
import { uploadToCloudinary } from '../config/cloudinary.config.js';

export default class EventRouter extends Router {
    init() {
        this.post('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, eventController.newEvent);
        this.post('/img', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, multipleUploader, uploadToCloudinary, eventController.newImg);
        this.post('/preset', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, eventController.newPreset);
        this.get('/:uid', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, eventController.getNotConfirm);
        this.put('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, eventController.putEvent);
    };
};