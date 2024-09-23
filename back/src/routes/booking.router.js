import Router from './routes.js';
import * as bookingController from '../controllers/booking.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class BookingRouter extends Router {

    init() {
        this.post('/', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, bookingController.newBooking);
        this.get('/admin', ['ADMIN', 'MASTER'], passportEnum.JWT, bookingController.getToAdmin);
        this.get('/user', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, bookingController.getBookings);
        this.get('/:uid/:id/:type', ['PUBLIC'], passportEnum.NOTHING, bookingController.getByUserAndType);
        this.put('/:id', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, bookingController.updActive);
    };
};