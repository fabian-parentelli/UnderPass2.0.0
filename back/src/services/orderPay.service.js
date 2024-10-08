import { orderPayRepository, walletRepository, orderSellerRepository } from "../repositories/index.repositories.js";
import { getByUserId } from "./wallet.service.js";
import { OrderNotFound } from '../utils/custom-exceptions.utils.js';
import { v4 as uuidv4 } from 'uuid';

const generateOrder = async (ord) => {
    const orderSeller = await orderSellerRepository.getOrderById(ord.id);
    const order = {
        userId: orderSeller.sellerUserId,
        orderId: ord.id,
        total: orderSeller.total,
        pay: { isPay: false },
        country: ord.country,
    };
    const result = await orderPayRepository.generateOrder(order);
    if (!result) throw new OrderNotFound('No se puede generar la orden');
    return { status: 'success' };
};

const newOrder = async (order) => {
    order.orderId = uuidv4();
    const data = await orderPayRepository.newOrders(order);
    if (!data) throw new OrderNotFound('No se puede generar una nueva orden');
    const wallet = await walletRepository.getByUserId(order.userId);
    if (wallet.reqMoney === false) wallet.reqMoney = true;
    await walletRepository.update(wallet);
    const userData = await getByUserId(order.userId);
    if (!userData) throw new OrderNotFound('No se encuentra el usuario');
    const result = userData.result;
    return { status: 'success', result };
};

const getData = async (country) => {
    let result = {};
    const data = await orderPayRepository.getData(country);
    if (!data) return { status: 'error', error: result };
    result = data;
    return { status: 'success', result };
};

const getOrderSellerByPay = async (id, { user }) => {
    const orderPay = await orderPayRepository.getById(id)
    const orderSeller = await orderSellerRepository.getById(orderPay.orderId, user);
    if (!orderSeller) throw new OrderNotFound('No se puede encontrar la orden');
    const result = orderSeller;
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

export { newOrder, getData, getOrdersPay, getOrderById, getOrderSellerByPay, generateOrder };