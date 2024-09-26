import { bookingManager, productManager, userManager } from '../dao/manager/index.manager.js';
import { BookingNotFound } from '../utils/custom-exceptions.utils.js';

export default class BookingRepository {

    newBooking = async (booking) => {
        const result = await bookingManager.newBooking(booking);
        return result;
    };

    getByUserAndType = async (query) => {
        const result = await bookingManager.getByUserAndType(query);
        return result;
    };

    getToAdmin = async (query, page) => {
        const result = await bookingManager.getToAdmin(query, page);
        if (!result) throw new BookingNotFound('No hay reservas');
        for (const book of result.docs) {
            book.total = 0;
            for (const user of book.users) {
                if(user.active) book.total += 1;
                const userDb = await userManager.getUserById(user.uid);
                user.data = { name: userDb.name, email: userDb.email };
            };
            const product = await productManager.getProdById(book._id);
            book.product = {
                img: product.img[0].imgUrl, name: product.name, userId: product.userId
            };
        };
        return result;
    };

    getBookings = async (query, page) => {
        const result = await bookingManager.getBookings(query, page);
        return result;
    };

    getById = async (id) => {
        const result = await bookingManager.getById(id);
        return result;
    };

    update = async (booking) => {
        const result = await bookingManager.update(booking);
        return result;
    };

    getAllPid = async (pid) => {
        const result = await bookingManager.getAllPid(pid);
        return result;
    };
};