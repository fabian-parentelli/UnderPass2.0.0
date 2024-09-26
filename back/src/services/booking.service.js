import { productRepository, bookingRepository, alertsRepository } from "../repositories/index.repositories.js";
import { BookingNotFound } from '../utils/custom-exceptions.utils.js';

const newBooking = async (booking) => {
    if (booking.type === 'product') {
        const product = await productRepository.getProdById(booking.pid);
        if (!product.inSite) throw new BookingNotFound('Los productos particulares no se pueden reservar');
    };
    const result = await bookingRepository.newBooking(booking);
    if (!result) throw new BookingNotFound('No se puede hacer la reserva');
    return { status: 'success', result };
};

const getBySeller = async (page, type, userid) => {
    if (!userid) throw new BookingNotFound('Falta el userId');
    const query = {};
    if (type === 'product') {
        const productsId = await productRepository.getProductIdByUserId(userid);
        query.pid = { $in: productsId };
    };
    if (type) query.type = type;
    const result = await bookingRepository.getToAdmin(query, page);
    if (!result) throw new BookingNotFound('No se puede mostrar las reservas');
    return { status: 'success', result };
};

const getToAdmin = async (page, type, active) => {
    const query = {};
    if (type) query.type = type;
    if (active !== undefined) query.active = active;
    const result = await bookingRepository.getToAdmin(query, page);
    if (!result) throw new BookingNotFound('No hay reservas');
    return { status: 'success', result };
};

const getBookings = async (page, userid, type, active, id) => {
    const query = {};
    if (userid) query.uid = userid;
    if (type) query.type = type;
    if (id) query._id = id;
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

const callBooking = async (pid, quantity) => {
    const bookings = await bookingRepository.getAllPid(pid);
    const totalbookings = bookings.length;
    for (let i = 0; i < quantity && i < totalbookings; i++) {
        await alertsRepository.newAlert({
            eventId: bookings[i]._id,
            userId: bookings[i].uid,
            type: 'productInStock'
        });
        bookings[i].active = false;
        const update = await bookingRepository.update(bookings[i]);
        if (!update) throw new BookingNotFound('No se puede actializar el estado de la reserva');
    };
};

export { newBooking, getByUserAndType, getBookings, updActive, getToAdmin, getBySeller, callBooking };