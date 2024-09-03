import { ticketModel } from '../models/ticket.model.js';

export default class Ticket {

    newTicket = async (ticket) => {
        return await ticketModel.create(ticket);
    };
}