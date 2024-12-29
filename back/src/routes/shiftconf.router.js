import Router from './routes.js';
import * as shiftconfController from '../controllers/shiftconf.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.conf.js'
import { uploadToCloudinary } from '../config/cloudinary.config.js';

export default class ShiftconfRouter extends Router {
    init() {
        this.post('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, multipleUploader, uploadToCloudinary, shiftconfController.newShift);
        this.get('/public', ['PUBLIC'], passportEnum.NOTHING, shiftconfController.getPublicShiftconf);
        this.get('/:id', ['PUBLIC'], passportEnum.NOTHING, shiftconfController.getShiftconfById);
        this.get('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, shiftconfController.getShiftconf);
        this.put('/active/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, shiftconfController.updActive);
    };
};