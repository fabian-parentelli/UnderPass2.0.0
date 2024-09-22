import { bookingManager } from '../dao/manager/index.manager.js';

export default class BookingRepository {

    newBooking = async (booking) => {
        const result = await bookingManager.newBooking(booking);
        return result;
    };

    getByUserAndType = async (query) => {
        const result = await bookingManager.getByUserAndType(query);
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

};