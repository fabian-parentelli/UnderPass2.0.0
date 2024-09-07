import { orderPayRepository, walletRepository } from "../repositories/index.repositories.js";
import { getByUserId } from "./wallet.service.js";
import { OrderNotFound } from '../utils/custom-exceptions.utils.js';
import { v4 as uuidv4 } from 'uuid';

const newOrder = async (order) => {
    order.orderId = uuidv4();
    const data = await orderPayRepository.newOrders(order);
    if(!data) throw new OrderNotFound('No se puede generar una nueva orden');
    const wallet = await walletRepository.getByUserId(order.userId);
    if(wallet.reqMoney === false) wallet.reqMoney = true;
    await walletRepository.update(wallet);
    const userData = await getByUserId(order.userId);
    if(!userData) throw new OrderNotFound('No se encuentra el usuario');
    const result = userData.result; 
    return { status: 'success', result };
};

const getOrderById = async (id) => {
    const result = await orderPayRepository.getOrdersPay({ _id: id }, { limit: 1 }, { page: 1 });
    if (!result) throw new OrderNotFound('No se puede encontrar la orden');
    return { status: 'success', result };
};

const getOrdersPay = async (page, limit, userid, active, pay, country) => {
    const query = {};
    if (userid) query.userId = userid;
    if (active) query.active = active;
    if (pay !== undefined) query['pay.isPay'] = pay;
    if (country) query.country = country;
    const result = await orderPayRepository.getOrdersPay(query, limit, page);
    if (!result) throw new OrderNotFound('No se puede encontrar la orden');
    return { status: 'success', result };
};

export { newOrder, getOrdersPay, getOrderById }