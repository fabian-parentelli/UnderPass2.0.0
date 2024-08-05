import Router from './routes.js';
import * as productController from '../controllers/products.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.conf.js';
import { uploadToCloudinary } from '../config/cloudinary.config.js';

export default class ProductRouter extends Router {
    init() {
        this.post('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, multipleUploader, uploadToCloudinary, productController.newProduct);
        this.get('/userid/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, productController.getByUserId);
        this.get('/tips_search/:name/favorite/:favorite', ['PUBLIC'], passportEnum.NOTHING, productController.getByTipsSearch);
        this.get('/id/:id', ['PUBLIC'], passportEnum.NOTHING, productController.getById);
        this.get('/random', ['PUBLIC'], passportEnum.NOTHING, productController.getRandom);
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, productController.getAll);
        this.put('/imgactive', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, productController.updImgActive);
        this.put('/uploadimg', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, multipleUploader, uploadToCloudinary, productController.uploadImg);
        this.put('/active/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, productController.updActive);
        this.put('/data/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, productController.updData);
    };
};