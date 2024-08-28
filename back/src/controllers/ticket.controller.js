import * as ticketService from '../services/ticket.service.js';
import { TicketNotFound } from '../utils/custom-exceptions.utils.js';

const newUnderPayTicket = async (req, res) => {
    try {
        const result = await ticketService.newUnderPayTicket({ ...req.body }, { ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof TicketNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newUnderPayTicket };