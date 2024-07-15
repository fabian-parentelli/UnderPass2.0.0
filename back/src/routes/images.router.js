import Router from './routes.js';
import * as imageController from '../controllers/images.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.conf.js'
import { uploadToCloudinary } from '../config/cloudinary.config.js';

export default class ImagenRouter extends Router {
    init() {
        this.post('/videotut', ['ADMIN'], passportEnum.JWT, imageController.newVideoTut);
        this.post('/banner', ['ADMIN'], passportEnum.JWT, multipleUploader, uploadToCloudinary, imageController.newBanners);
        this.get('/getAllVideo', ['PUBLIC'], passportEnum.NOTHING, imageController.getAllVideos);
        this.get('/bannerbody', ['PUBLIC'], passportEnum.NOTHING, imageController.getBannerBody);
        this.get('/getallbanners', ['PUBLIC'], passportEnum.NOTHING, imageController.getAllBanners);
        this.get('/videotut/:name', ['PUBLIC'], passportEnum.NOTHING, imageController.getVideoTutByName);
        this.put('/videoactive', ['ADMIN'], passportEnum.JWT, imageController.activeVideo);
        this.put('/banner/:id', ['ADMIN'], passportEnum.JWT, imageController.updBanner);
        this.put('/banneractive/:id', ['ADMIN'], passportEnum.JWT, imageController.updBannerActive);
    };
};