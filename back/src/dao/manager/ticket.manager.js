import { ticketModel } from '../models/ticket.model.js';

export default class Ticket {

    newTicket = async (ticket) => {
        return await ticketModel.create(ticket);
    };

    getByOrderId = async (id) => {
        return await ticketModel.findOne({ orderId: id }).lean();
    };

    getById = async (id) => {
        return await ticketModel.findById(id).lean();
    };
};