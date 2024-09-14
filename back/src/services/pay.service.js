import {
    orderRepository, walletRepository, orderSellerRepository, ticketRepository, alertsRepository,
    orderPayRepository
} from "../repositories/index.repositories.js";
import { PayNotFound } from "../utils/custom-exceptions.utils.js";

const newUnderPay = async ({ orderId }, { user }) => {
    const buyerOrder = await orderRepository.getOrderById(orderId);
    if (!buyerOrder) throw new PayNotFound('No se encuentra la orden del cliente');
    const buyerWallet = await walletRepository.getByUserId(buyerOrder.userId);
    if (!buyerWallet) throw new PayNotFound('No se encuentra la billetera del cliente');
    if (+buyerOrder.total > +buyerWallet.total) throw new PayNotFound('Saldo insuficiente');
    buyerOrder.pay = {
        ...buyerOrder.pay, isPay: true, datePay: new Date(), statusPay: 'success'
    };
    // const result = await orderRepository.update(buyerOrder);
    // if (!result) throw new PayNotFound('Error al actualizar la orden de compra');
    const buyerTicket = {
        orderId: orderId, by: buyerOrder.userId, to: 'underPass', country: user.location.country, type: 'underPay',
        total: buyerOrder.total
    };
    // const buyTicket = await ticketRepository.newTicket(buyerTicket);
    // if (!buyTicket) throw new PayNotFound('Error al generar el ticket de la compra');
    buyerWallet.total -= buyerOrder.total;
    const buyWallet = {
        type: false, byTo: 'uderPass', TypeMotion: 'underPay',
        // ticket: buyTicket._id,
        status: 'success', cash: buyerOrder.total
    };
    buyerWallet.money.push(buyWallet);
    // const walletResult = await walletRepository.update(buyerWallet);
    // if (!walletResult) throw new PayNotFound('Error al actualizar la billetera de compra');
    const ordersSellers = await orderSellerRepository.getOrdersUpdate({ orderId: orderId });
    for (const ord of ordersSellers) {
        ord.pay = {
            payIn: { isPayIn: true, datePayIn: new Date(), statusPayIn: 'success' },
            payCredited: { isPayCredited: true, datePayCredited: new Date() },
            payOut: { isPayOut: false }
        };
        // const ordersSellersResult = await orderSellerRepository.update(ord);
        // if (!ordersSellersResult) throw new PayNotFound('Error al actualizar la orden de venta');
        const sellerTicket = {
            orderId: ord._id, by: ord.buyerUserId, to: ord.sellerUserId, country: user.location.country, type: 'underPay',
            total: ord.total
        };
        // const buySellerTicket = await ticketRepository.newTicket(sellerTicket);
        // if (!buySellerTicket) throw new PayNotFound('Error al generar el ticket de la venta');
        const sellerWallet = await walletRepository.getByUserId(ord.sellerUserId);
        sellerWallet.total += ord.total;
        const sellWallet = {
            type: true, byTo: ord.buyerUserId, TypeMotion: 'underPay',
            // ticket: buySellerTicket._id,
            status: 'success', cash: ord.total
        };
        // const walletSellerResult = await walletRepository.update(sellWallet);
        // if (!walletSellerResult) throw new PayNotFound('Error al actualizar la billetera del vendedor');
        if (sellerWallet.inWallet) {
            const orderPay = {
                userId: ord.sellerUserId,
                orderId: ord._id,
                total: ord.total,
                pay: { isPay: false },
                country: user.location.country
            };
            // const orderPayResul = await orderPayRepository.newOrders(orderPay);
            // if (!orderPayResul) throw new PayNotFound('Error al generar la orden de pago');
        };
        const alart = {
            // eventId: buySellerTicket._id,
            userId: ord.sellerUserId,
            type: 'sold_product',
            orderSellerId: ord._id
        };
        // const alertResult = await alertsRepository.newAlert(alert);
        // if (!alertResult) throw new PayNotFound('Error al generar alarma de venta');
    };
    const alertBuyer = {
        eventId: buyerOrder._id,
        userId: buyerOrder.userId,
        type: 'transfer_confirm',
    };
    // const alertBuyerResult = await alertsRepository.newAlert(alertBuyer);
    // if (!alertBuyerResult) throw new PayNotFound('Error al generar alarma de compra');
};
//underpay/cart/66e5e08d0620ac67d92d7bba
export { newUnderPay };