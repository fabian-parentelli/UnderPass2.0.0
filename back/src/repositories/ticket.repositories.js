import { ticketManager, userManager } from '../dao/manager/index.manager.js';

export default class ticketRepository {

    newTicket = async (ticket) => {
        const result = await ticketManager.newTicket(ticket);
        return result;
    };

    getByOrderId = async (id) => {
        const preSet = await ticketManager.getByOrderId(id);
        const result = await getUser(preSet);
        return result;

    };

    getById = async (id) => {
        const preSet = await ticketManager.getById(id);
        const result = await getUser(preSet);
        return result;
    };
};

const getUser = async (data) => {
    let user = {};
    if (data.by !== 'underPass') user.userBy = await userManager.getUserById(data.by);
    if (data.to !== 'underPass') user.userTo = await userManager.getUserById(data.to);
    if (user.userBy) {
        data.userBy = user.userBy;
        delete data.userBy.password;
    };
    if (user.userTo) {
        data.userTo = user.userTo;
        delete data.userTo.password;
    };
    return data;
};