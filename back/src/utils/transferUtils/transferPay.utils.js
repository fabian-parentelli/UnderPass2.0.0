import {
    transferPayRepository, orderPayRepository, auditRepository, walletRepository, alertsRepository
} from "../../repositories/index.repositories.js";
import { TransferNotFound } from '../custom-exceptions.utils.js';
import { updateCashTotal } from '../cash/updateCash.utils.js';

const createOrder = async (imgUrl, data) => {
    const datas = {
        imgUrl: imgUrl[0],
        orderId: data.ordersId.split(','),
        data: {
            operation: data.operation,
            customer: data.customer,
            accountHolder: data.accountHolder,
            bank: data.bank,
            total: data.total,
            dateData: new Date(data.date)
        }
    };
    for (const ord of datas.orderId) {
        const order = await orderPayRepository.getById(ord);
        datas.country = order.country;
        datas.userId = order.userId;
        order.pay.isPay = true;
        order.pay.datePay = new Date();
        await orderPayRepository.update(order);
    };
    const result = await transferPayRepository.newTransferPay(datas);
    if (!result) throw new TransferNotFound('No se puede guardar la tranferencia');
    return result;
};

const updateTreasure = async (data) => {
    const cash = {
        difCash: 0,
        difTreasure: data.data.total,
        inOut: 'out',
        ticketId: data._id,
        type: data.data.bank,
        country: data.country
    };
    const result = await updateCashTotal(cash);
    if (!result) throw new TransferNotFound('No se puede modificar el tesoro');
    const { _id, ...audit } = result._doc;
    audit.cashId = result._id;
    const resultAudit = await auditRepository.newAudit(audit);
    if (!resultAudit) throw new TransferNotFound('No se puede crear el archivo de audición');
};

const updateWallet = async (data) => {
    const wallet = await walletRepository.getByUserId(data.userId);
    wallet.total -= data.data.total;
    const wall = {
        type: false,
        byTo: 'underPass',
        TypeMotion: 'transfer',
        ticket: data._id,
        status: 'success',
        cash: data.data.total
    };
    wallet.money.push(wall);
    if(wallet.inWallet) wallet.reqMoney = false;
    await walletRepository.update(wallet);
};

const newAlerts = async (data) => {
    const alerts = {
        eventId: data._id,
        userId: data.userId,
        type: 'payTranferToCustomer'
    };
    await alertsRepository.newAlert(alerts);
};

export { createOrder, updateTreasure, updateWallet, newAlerts };