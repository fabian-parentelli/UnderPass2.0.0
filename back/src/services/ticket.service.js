import { ticketRepository } from "../repositories/index.repositories.js";
import { TicketNotFound } from '../utils/custom-exceptions.utils.js';

const getTicketByOrder = async (id) => {
    const result = await ticketRepository.getByOrderId(id);
    if (!result) throw new TicketNotFound('No se puede encontrar el ticket');
    return { status: 'success', result };
};

const getTicketById = async (id) => {
    const result = await ticketRepository.getById(id);
    if (!result) throw new TicketNotFound('No se puede encontrar el ticket');
    return { status: 'success', result };
};

export { getTicketByOrder, getTicketById };