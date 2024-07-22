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
        this.get('/current', ['PUBLIC'], passportEnum.JWT, userController.current);
        this.get('/seeker', ['ADMIN', 'MASTER'], passportEnum.JWT, userController.sekker);
        this.get('/inter_pass/:id', ['PUBLIC'], passportEnum.NOTHING, userController.interPass);
        this.get('/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, userController.getUserById);
        this.get('/', ['ADMIN', 'MASTER'], passportEnum.JWT, userController.getAllUsers);
        this.put('/new_password', ['PUBLIC'], passportEnum.JWT, userController.newPassword);
    };
};