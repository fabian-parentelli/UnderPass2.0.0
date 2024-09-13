import {
    orderRepository, ticketRepository, alertsRepository, auditRepository, orderSellerRepository, walletRepository,
    orderPayRepository, appliRepository
} from "../../repositories/index.repositories.js";
import { updateCashTotal } from "../cash/updateCash.utils.js";
import { CashNotFound, TransferNotFound } from '../custom-exceptions.utils.js';

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

const updateCash = async () => {
    const cash = {
        difCash: ticketBuyer.total,
        difTreasure: ticketBuyer.total,
        inOut: 'in',
        ticketId: ticketBuyer._id,
        type: ticketBuyer.type,
        country: ticketBuyer.country
    };
    const result = await updateCashTotal(cash);
    const { difCash, difTreasure, _id, ...audit } = result._doc;
    audit.cashId = result._id;
    const resultAudit = await auditRepository.newAudit(audit);
    if (!resultAudit) throw new CashNotFound('No se puede crear el archivo de audición');
};

const updOrderBySeller = async (tranfer) => {
    const orders = await orderSellerRepository.getOrdersUpdate({ orderId: tranfer.orderId });
    if (orders) {
        for (const ord of orders) {
            ord.pay = {
                payIn: {
                    isPayIn: true,
                    datePayIn: new Date(),
                    statusPay: 'success'
                },
                payCredited: {
                    isPayCredited: true,
                    datePayCredited: new Date()
                },
                payOut: {
                    isPayOut: false
                }
            };
            await orderSellerRepository.update(ord);
            await updateCashSeller(ord, tranfer.country);
        };
    };
};

const updateCashSeller = async (order, country) => {
    const ticket = {
        orderId: order._id,
        by: 'underPass',
        to: order.sellerUserId,
        total: order.total,
        country: country,
        type: 'underPay'
    };
    const ticketSeller = await ticketRepository.newTicket(ticket);
    const cash = {
        difCash: order.total,
        difTreasure: 0,
        inOut: 'out',
        ticketId: ticketSeller._id,
        type: 'underPay',
        country: country
    };
    const result = await updateCashTotal(cash);
    const { _id, ...audit } = result._doc;
    audit.cashId = result._id;
    const resultAudit = await auditRepository.newAudit(audit);
    if (!resultAudit) throw new CashNotFound('No se puede crear el archivo de audición');
    const wallet = await walletRepository.getByUserId(order.sellerUserId);
    wallet.total += order.total;
    const wall = {
        type: true,
        byTo: 'underPass',
        TypeMotion: 'transfer',
        ticket: ticketSeller._id,
        status: 'success',
        cash: order.total
    };
    wallet.money.push(wall);
    await walletRepository.update(wallet);
    if (!wallet.inWallet) {
        const orderPay = {
            userId: wallet.userId,
            orderId: order._id,
            total: order.total,
            country: wallet.country
        };
        await orderPayRepository.newOrders(orderPay);
    } else {
        const alerts = {
            eventId: ticketSeller._id,
            userId: wallet.userId,
            type: 'youMoneyInWallet'
        };
        await alertsRepository.newAlert(alerts);
    };
    return { status: 'success' };
};

const updApplication = async () => {
    if(userOrder) {
        for(const ord of userOrder.cart) {
            const app = await appliRepository.getAppById(ord.typeId);
            if(app) {
                app.pay = true;
                await appliRepository.update(app);
            };
        };
    };
};

export { updOrderBuyer, updateCash, updOrderBySeller, updApplication };