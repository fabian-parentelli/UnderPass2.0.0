import * as bookingService from '../services/booking.service.js';
import { BookingNotFound } from '../utils/custom-exceptions.utils.js';

const newBooking = async (req, res) => {
    try {
        const result = await bookingService.newBooking({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof BookingNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getBySeller = async (req, res) => {
    const { page = 1, type, userid } = req.query;
    try {
        const result = await bookingService.getBySeller(page, type, userid);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof BookingNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getToAdmin = async (req, res) => {
    const { page = 1, type, active } = req.query;
    try {
        const result = await bookingService.getToAdmin(page, type, active);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof BookingNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getBookings = async (req, res) => {
    const { page = 1, userid, type, active } = req.query;
    try {
        const result = await bookingService.getBookings(page, userid, type, active);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof BookingNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getByUserAndType = async (req, res) => {
    const { uid, id, type } = req.params;
    try {
        const result = await bookingService.getByUserAndType(uid, id, type);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof BookingNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updActive = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await bookingService.updActive(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof BookingNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newBooking, getByUserAndType, getBookings, updActive, getToAdmin, getBySeller };