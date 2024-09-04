import {
    orderRepository, ticketRepository, alertsRepository
} from "../../repositories/index.repositories.js";
import updateCashTotal from "../cash/updateCash.utils.js";
import { TransferNotFound } from '../custom-exceptions.utils.js';

let userOrder;
let ticketBuyer;

const updOrderBuyer = async (tranfer) => {
    userOrder = await orderRepository.getOrderById(tranfer.orderId);
    userOrder.pay.isPay = true;
    userOrder.pay.datePay = new Date();
    userOrder.pay.statusPay = 'success';
    const result = await orderRepository.update(userOrder);
    if (!result) throw new TransferNotFound('No se puede actualizar la orden del comprador');
    const ticket = {
        orderId: tranfer.orderId,
        by: tranfer.userId,
        to: 'underPass',
        total: userOrder.total,
        country: tranfer.country,
        type: 'transfer'
    };
    ticketBuyer = await ticketRepository.newTicket(ticket);
    if (ticketBuyer) {
        const alerts = {
            eventId: ticketBuyer._id,
            userId: ticketBuyer.by,
            type: 'transfer_confirm'
        };
        await alertsRepository.newAlert(alerts);
    };
};

// Borrar esto es solo para las pruebas.. --------------------------------------- // -------------------
ticketBuyer = { total: 5750, _id: '66d79edee69f2434d2a6f158', type: 'transfer', country: 'UY' }; // ----
// ------------------------------------------------------------------------------ // -------------------

const updateCash = async () => {
    const cash = {
        difCash: ticketBuyer.total,
        difTreasure: ticketBuyer.total,
        inOut: 'in',
        ticketId: ticketBuyer._id,
        type: ticketBuyer.type,
        country: ticketBuyer.country
    };
    await updateCashTotal(cash);
};

const updOrderBySeller = async (tranfer) => {

    console.log(tranfer);
    // Primero busco las ordenes
    // por cada una de ellas
    // actualizao la orden segun configuracion paga ya o no
    // deposito la plata en las billeteras, en la caja

};

export { updOrderBuyer, updateCash, updOrderBySeller };