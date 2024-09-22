import { productRepository, bookingRepository } from "../repositories/index.repositories.js";
import { BookingNotFound } from '../utils/custom-exceptions.utils.js';

const newBooking = async (booking) => {
    if (booking.type === 'product') {
        const product = await productRepository.getProdById(booking.pid);
        if (!product.inSite) throw new BookingNotFound('Los producto particulares no se pueden reservar');
    };
    const result = await bookingRepository.newBooking(booking);
    if (!result) throw new BookingNotFound('No se puese hacer la reserva');
    return { status: 'success', result };
};

const getBookings = async (page, userid, type, active) => {
    const query = {};
    if(userid) query.uid = userid;
    if(type) query.type = type;
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
    if (!result) throw new BookingNotFound('No se puese hacer la reserva');
    return { status: 'success', result };
};

export { newBooking, getByUserAndType, getBookings, updActive };