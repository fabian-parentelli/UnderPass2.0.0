import { userManager } from "../dao/manager/index.manager.js";
import { productRepository, bookingRepository } from "../repositories/index.repositories.js";
import { BookingNotFound } from '../utils/custom-exceptions.utils.js';

const newBooking = async (booking) => {
    if (booking.type === 'product') {
        const product = await productRepository.getProdById(booking.pid);
        if (!product.inSite) throw new BookingNotFound('Los producto particulares no se pueden reservar');
    };
    const result = await bookingRepository.newBooking(booking);
    if (!result) throw new BookingNotFound('No se puede hacer la reserva');
    return { status: 'success', result };
};

const getToAdmin = async (page, type, active) => {
    const query = {};
    if (type) query.type = type;
    if (active !== undefined) query.active = active;
    const result = await bookingRepository.getToAdmin(query, page);
    if (!result) throw new BookingNotFound('No hay reservas');
    for (const book of result.docs) {
        book.total = book.users.length;
        for (const user of book.users) {
            const userDb = await userManager.getUserById(user.uid);
            user.data = { name: userDb.name, email: userDb.email };
        };
        const product = await productRepository.getProdById(book._id);
        book.product = {
            img: product.img[0].imgUrl, name: product.name
        };
    };
    return { status: 'success', result };
};

const getBookings = async (page, userid, type, active) => {
    const query = {};
    if (userid) query.uid = userid;
    if (type) query.type = type;
    if (active !== undefined) query.active = active;
    const result = await bookingRepository.getBookings(query, page);
    if (!result) throw new BookingNotFound('No se puese hacer la reserva');
    return { status: 'success', result };
};

const getByUserAndType = async (uid, id, type) => {
    const query = { uid: uid };
    if (type === 'product') query.pid = id
    const result = await bookingRepository.getByUserAndType(query);
    if (!result) return { status: 'error', result };
    return { status: 'success', result };
};

const updActive = async (id) => {
    const booking = await bookingRepository.getById(id);
    booking.active = !booking.active;
    const result = await bookingRepository.update(booking);
    result.pid = await productRepository.getProdById(result.pid);
    if (!result) throw new BookingNotFound('No se puese hacer la reserva');
    return { status: 'success', result };
};

export { newBooking, getByUserAndType, getBookings, updActive, getToAdmin };