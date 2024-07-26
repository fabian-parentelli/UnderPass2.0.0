import Router from './routes.js';
import * as imageController from '../controllers/images.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.conf.js'
import { uploadToCloudinary } from '../config/cloudinary.config.js';

export default class ImagenRouter extends Router {
    init() {
        this.post('/videotut', ['ADMIN', 'MASTER'], passportEnum.JWT, imageController.newVideoTut);
        this.post('/banner', ['ADMIN', 'MASTER'], passportEnum.JWT, multipleUploader, uploadToCloudinary, imageController.newBanners);
        this.post('/avatar', ['ADMIN', 'MASTER'], passportEnum.JWT, multipleUploader, uploadToCloudinary, imageController.newAvatar);
        this.get('/getAllVideo', ['PUBLIC'], passportEnum.NOTHING, imageController.getAllVideos);
        this.get('/bannerbody', ['PUBLIC'], passportEnum.NOTHING, imageController.getBannerBody);
        this.get('/getallbanners', ['PUBLIC'], passportEnum.NOTHING, imageController.getAllBanners);
        this.get('/avatar/:type', ['PUBLIC'], passportEnum.NOTHING, imageController.getAvatars);
        this.get('/videotut/:name', ['PUBLIC'], passportEnum.NOTHING, imageController.getVideoTutByName);
        this.put('/videoactive', ['ADMIN', 'MASTER'], passportEnum.JWT, imageController.activeVideo);
        this.put('/banner/:id', ['ADMIN', 'MASTER'], passportEnum.JWT, imageController.updBanner);
        this.put('/banneractive/:id', ['ADMIN', 'MASTER'], passportEnum.JWT, imageController.updBannerActive);
        this.put('/avatar/:id', ['ADMIN', 'MASTER'], passportEnum.JWT, imageController.avatarActive);
    };
};