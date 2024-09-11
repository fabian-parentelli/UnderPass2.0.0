import { transferPayRepository } from "../repositories/index.repositories.js";
import { TransferNotFound } from '../utils/custom-exceptions.utils.js';
import * as transferPayUtils from "../utils/transferUtils/transferPay.utils.js";

const newTransferPay = async (imgUrl, data) => {
    const result = await transferPayUtils.createOrder(imgUrl, data);
    await transferPayUtils.updateTreasure(result);
    await transferPayUtils.updateWallet(result);
    await transferPayUtils.newAlerts(result);
    await transferPayUtils.updOrderSellers(result);
    return { status: 'success', result };
};

const getById = async (id) => {
    const result = await transferPayRepository.getById(id);
    if (!result) throw new TransferNotFound('No se puede obtener la transferencia');    
    return { status: 'success', result };
};

const getTransfer = async (page, limit, userid, pay, country) => {
    const query = {};
    if (userid) query.userId = userid;
    if (pay !== undefined) query['pay.isPay'] = pay;
    if (country) query.country = country;
    const result = await transferPayRepository.getTransfer(query, limit, page);
    if (!result) throw new TransferNotFound('No se puede obtener la transferencia');
    return { status: 'success', result };
};

export { newTransferPay, getTransfer, getById };