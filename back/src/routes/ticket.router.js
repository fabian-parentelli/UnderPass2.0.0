import Router from './routes.js';
import * as ticketController from '../controllers/ticket.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class TicketRouter extends Router {
    init() {
        this.post('/underpay', ['USER', 'ADMIN', 'MASTER'], passportEnum.JWT, ticketController.newUnderPayTicket);
    };
};