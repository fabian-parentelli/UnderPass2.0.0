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

const getTicketByOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await ticketService.getTicketByOrder(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof TicketNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getTicketById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await ticketService.getTicketById(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof TicketNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newUnderPayTicket, getTicketByOrder, getTicketById };