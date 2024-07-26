import Router from './routes.js';
import * as userController from '../controllers/users.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.conf.js'
import { uploadToCloudinary } from '../config/cloudinary.config.js';

export default class UserRouter extends Router {
    init() {
        this.post('/register', ['PUBLIC'], passportEnum.NOTHING, multipleUploader, uploadToCloudinary, userController.register);
        this.post('/login', ['PUBLIC'], passportEnum.NOTHING, userController.login);
        this.post('/recover_password', ['PUBLIC'], passportEnum.NOTHING, userController.recoverPassword);
        this.post('/financial', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, userController.newFinancial);
        this.get('/paginates', ['ADMIN', 'MASTER'], passportEnum.JWT, userController.paginates);
        this.get('/current', ['PUBLIC'], passportEnum.JWT, userController.current);
        this.get('/seeker', ['ADMIN', 'MASTER'], passportEnum.JWT, userController.sekker);
        this.get('/search/:name', ['ADMIN', 'MASTER'], passportEnum.JWT, userController.searchUser);
        this.get('/inter_pass/:id', ['PUBLIC'], passportEnum.NOTHING, userController.interPass);
        this.get('/financial/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, userController.getFinancial);
        this.get('/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, userController.getUserById);
        this.get('/', ['ADMIN', 'MASTER'], passportEnum.JWT, userController.getAllUsers);
        this.put('/new_password', ['PUBLIC'], passportEnum.JWT, userController.newPassword);
        this.put('/financial', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, userController.updFinancial);
        this.put('/avatar/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, userController.updAvatar);
        this.put('/imgavatar/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, multipleUploader, uploadToCloudinary, userController.ImgAvatar);
        this.put('/role/:id', ['MASTER'], passportEnum.JWT, userController.updRole);
        this.put('/active/:id', ['ADMIN', 'MASTER'], passportEnum.JWT, userController.updActive);
        this.put('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, userController.updUser);
    };
};