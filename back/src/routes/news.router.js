import Router from './routes.js';
import * as newsController from '../controllers/news.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.conf.js';
import { uploadToCloudinary } from '../config/cloudinary.config.js';

export default class NewsRouter extends Router {
    init() {
        this.post('/', ['ADMIN', 'MASTER'], passportEnum.JWT, multipleUploader, uploadToCloudinary, newsController.createNews);
        this.get('/:id', ['PUBLIC'], passportEnum.NOTHING, newsController.getById);
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, newsController.getAll);
        this.put('/:id', ['ADMIN', 'MASTER'], passportEnum.JWT, newsController.updActive);
        this.put('/', ['ADMIN', 'MASTER'], passportEnum.JWT, multipleUploader, uploadToCloudinary, newsController.updNews);
    };
};