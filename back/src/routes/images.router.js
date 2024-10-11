import Router from './routes.js';
import * as imageController from '../controllers/images.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.conf.js'
import { uploadToCloudinary } from '../config/cloudinary.config.js';

export default class ImagenRouter extends Router {
    init() {
        this.post('/videotut', ['ADMIN', 'MASTER'], passportEnum.JWT, imageController.newVideoTut);
        this.post('/avatar', ['ADMIN', 'MASTER'], passportEnum.JWT, multipleUploader, uploadToCloudinary, imageController.newAvatar);
        this.post('/preset', ['ADMIN', 'MASTER'], passportEnum.JWT, multipleUploader, uploadToCloudinary, imageController.newPresets);
        this.get('/getAllVideo', ['PUBLIC'], passportEnum.NOTHING, imageController.getAllVideos);
        this.get('/preset', ['PUBLIC'], passportEnum.NOTHING, imageController.getPreset);
        this.get('/avatar/:type', ['PUBLIC'], passportEnum.NOTHING, imageController.getAvatars);
        this.get('/videotut/:name', ['PUBLIC'], passportEnum.NOTHING, imageController.getVideoTutByName);
        this.put('/videoactive', ['ADMIN', 'MASTER'], passportEnum.JWT, imageController.activeVideo);
        this.put('/preset/:id', ['ADMIN', 'MASTER'], passportEnum.JWT, imageController.presetActive);
        this.put('/avatar/:id', ['ADMIN', 'MASTER'], passportEnum.JWT, imageController.avatarActive);
    };
};