import {
    orderRepository, walletRepository, orderSellerRepository, ticketRepository, alertsRepository,
    orderPayRepository, appliRepository, userRepository
} from "../repositories/index.repositories.js";
import { updateCashTotal } from "../utils/cash/updateCash.utils.js";
import { OrderNotFound, PayNotFound } from "../utils/custom-exceptions.utils.js";
import { isValidPassword } from "../utils/hashedPassword.utils.js";

const newUnderPay = async (order, { user }) => {
    const buyerOrder = await orderRepository.getOrderById(order.orderId);
    if (!buyerOrder) throw new PayNotFound('No se encuentra la orden del cliente');
    const userDb = await userRepository.getUserById(buyerOrder.userId);
    if (!userDb) throw new PayNotFound('No se puede obtener al usuario');
    const comparePassword = isValidPassword(userDb, order.password);
    if(!comparePassword) throw new OrderNotFound('La contraseña es incorrecta');
    
    const buyerWallet = await walletRepository.getByUserId(buyerOrder.userId);
    if (!buyerWallet) throw new PayNotFound('No se encuentra la billetera del cliente');
    if (+buyerOrder.total > +buyerWallet.total) throw new PayNotFound('Saldo insuficiente');
    buyerOrder.pay = {
        ...buyerOrder.pay, isPay: true, datePay: new Date(), statusPay: 'success'
    };
    const result = await orderRepository.update(buyerOrder);
    if (!result) throw new PayNotFound('Error al actualizar la orden de compra');
    for (const ord of buyerOrder.cart) {
        if (ord.is !== 'product' || ord.is !== 'event' || ord.is !== 'shift') {
            const application = await appliRepository.getAppById(ord.typeId);
            if (application) {
                application.pay = true;
                const appResult = await appliRepository.update(application);
                if(!appResult) throw new PayNotFound('No se puede modificar la solicitud'); 
            };
        };
    };
    const buyerTicket = {
        orderId: order.orderId, by: buyerOrder.userId, to: 'underPass', country: user.location.country, type: 'underPay',
        total: buyerOrder.total
    };
    const buyTicket = await ticketRepository.newTicket(buyerTicket);
    if (!buyTicket) throw new PayNotFound('Error al generar el ticket de la compra');
    buyerWallet.total -= buyerOrder.total;
    const buyWallet = {
        type: false, byTo: 'uderPass', TypeMotion: 'underPay',
        ticket: buyTicket._id,
        status: 'success', cash: buyerOrder.total
    };
    buyerWallet.money.push(buyWallet);
    const walletResult = await walletRepository.update(buyerWallet);
    if (!walletResult) throw new PayNotFound('Error al actualizar la billetera de compra');
    const ordersSellers = await orderSellerRepository.getOrdersUpdate({ orderId: order.orderId });
    const totalSeller = ordersSellers.reduce((acc, ord) => acc + ord.total, 0) || 0;
    const cashUpd = {
        difCash: buyerOrder.total - totalSeller,
        difTreasure: 0,
        inOut: 'in',
        ticketId: buyTicket._id,
        type: buyTicket.type,
        country: buyTicket.country
    };
    await updateCashTotal(cashUpd);
    if (ordersSellers) {
        for (const ord of ordersSellers) {
            ord.pay = {
                payIn: { isPayIn: true, datePayIn: new Date(), statusPayIn: 'success' },
                payCredited: { isPayCredited: true, datePayCredited: new Date() },
                payOut: { isPayOut: false }
            };
            const ordersSellersResult = await orderSellerRepository.update(ord);
            if (!ordersSellersResult) throw new PayNotFound('Error al actualizar la orden de venta');
            const sellerTicket = {
                orderId: ord._id, by: ord.buyerUserId, to: ord.sellerUserId, country: user.location.country, type: 'underPay',
                total: ord.total
            };
            const SellerTicket = await ticketRepository.newTicket(sellerTicket);
            if (!SellerTicket) throw new PayNotFound('Error al generar el ticket de la venta');
            const sellerWallet = await walletRepository.getByUserId(ord.sellerUserId);
            sellerWallet.total += ord.total;
            const sellWallet = {
                type: true, byTo: ord.buyerUserId, TypeMotion: 'underPay',
                ticket: SellerTicket._id,
                status: 'success', cash: ord.total
            };
            sellerWallet.money.push(sellWallet);
            const walletSellerResult = await walletRepository.update(sellerWallet);
            if (!walletSellerResult) throw new PayNotFound('Error al actualizar la billetera del vendedor');
            if (!sellerWallet.inWallet) {
                const orderPay = {
                    userId: ord.sellerUserId,
                    orderId: ord._id,
                    total: ord.total,
                    pay: { isPay: false },
                    country: user.location.country
                };
                const orderPayResul = await orderPayRepository.newOrders(orderPay);
                if (!orderPayResul) throw new PayNotFound('Error al generar la orden de pago');
            };
            const alertSell = {
                eventId: SellerTicket._id,
                userId: ord.sellerUserId,
                type: 'sold_product',
                orderSellerId: ord._id
            };
            const alertResult = await alertsRepository.newAlert(alertSell);
            if (!alertResult) throw new PayNotFound('Error al generar alarma de venta');
        };
    };
    const alertBuyer = {
        eventId: buyTicket._id,
        userId: buyerOrder.userId,
        type: 'success_pay',
    };
    const alertBuyerResult = await alertsRepository.newAlert(alertBuyer);
    if (!alertBuyerResult) throw new PayNotFound('Error al generar alarma de compra');
    return { status: 'success', result };
};

export { newUnderPay };