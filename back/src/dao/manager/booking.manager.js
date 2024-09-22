import { bookingModel } from '../models/booking.model.js';

export default class Booking {

    newBooking = async (booking) => {
        return await bookingModel.create(booking);
    };

    getByUserAndType = async (query) => {
        return await bookingModel.findOne(query).lean();
    };

    getBookings = async (query, page) => {
        return await bookingModel.paginate(query, page, { limit: 12 }, { lean: true, new: true });
    };

    getById = async (id) => {
        return await bookingModel.findById(id).lean();
    };

    update = async (booking) => {
        return await bookingModel.findByIdAndUpdate(booking._id, booking, { lean: true, new: true });
    };
    
};