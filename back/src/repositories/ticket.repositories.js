import { ticketManager } from '../dao/manager/index.manager.js';

export default class ticketRepository {

    newTicket = async (ticket) => {
        const result = await ticketManager.newTicket(ticket);
        return result;
    };
};