import { ticketRepository } from "../../repositories/index.repositories.js";
import { TicketNotFound } from "../custom-exceptions.utils.js";

const newTicket = async (ticket, user) => {
    const tic = {
        orderId: ticket.orderId,
        by: user._id,
        to: ticket.byTo,
        total: ticket.total,
        country: user.location.country
    };
    const result = await ticketRepository.newUnderPayTicket(tic);
    if(!result) throw new TicketNotFound('No se puede generar el ticket');
    return result;
};

export { newTicket };