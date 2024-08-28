import { ticketModel } from '../models/ticket.model.js';

export default class Ticket {

    newUnderPayTicket = async (ticket) => {
        return await ticketModel.create(ticket);
    };
}