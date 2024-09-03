import {
    orderRepository, ticketRepository, alertsRepository
} from "../../repositories/index.repositories.js";
import { TransferNotFound } from '../custom-exceptions.utils.js';

let userOrder;

const updOrderBuyer = async (tranfer) => {
    userOrder = await orderRepository.getOrderById(tranfer.orderId);
    userOrder.pay.isPay = true;
    userOrder.pay.datePay = new Date();
    userOrder.pay.statusPay = 'success';
    const result = await orderRepository.update(userOrder);
    if(!result) throw new TransferNotFound('No se puede actualizar la orden del comprador');
    const ticket = {
        orderId: tranfer.orderId,
        by: tranfer.userId,
        to: 'underPass',
        total: userOrder.total,
        country: tranfer.country
    };
    const resultTicket = await ticketRepository.newTicket(ticket);
    if (resultTicket) {
        const alerts = {
            eventId: resultTicket._id,
            userId: resultTicket.by,
            type: 'transfer_confirm'
        };
        await alertsRepository.newAlert(alerts);
    };
};

export { updOrderBuyer };