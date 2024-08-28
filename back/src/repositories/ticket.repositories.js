import { ticketManager } from '../dao/manager/index.manager.js';

export default class ticketRepository {

    newUnderPayTicket = async (ticket) => {
        const result = await ticketManager.newUnderPayTicket(ticket);
        return result;
    };
}