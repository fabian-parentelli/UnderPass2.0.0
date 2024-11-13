import Router from './routes.js';
import * as sitesController from '../controllers/sites.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.conf.js'
import { uploadToCloudinary } from '../config/cloudinary.config.js';

export default class SitesRouter extends Router {
    init() {
        this.post('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, multipleUploader, uploadToCloudinary, sitesController.newSite);
        this.get('/user/:uid', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, sitesController.getByUserId);
        this.get('/link/:link', ['PUBLIC'], passportEnum.NOTHING, sitesController.getByLinks);
        this.get('/random/:country', ['PUBLIC'], passportEnum.NOTHING, sitesController.getRandom);
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, sitesController.getSites);
    };
};