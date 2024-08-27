import { orderRepository } from "../repositories/index.repositories.js";
import * as newOrderUtils from '../utils/orderUtils/newOrderUtils.utils.js';
import { OrderNotFound } from "../utils/custom-exceptions.utils.js";

const newOrder = async (order, { user }) => {
    await newOrderUtils.updateUser(user._id, order.user);
    await newOrderUtils.updateStock(order.cart);
    const result = await newOrderUtils.newOrders(order.cart, user._id);
    if (!result) throw new OrderNotFound('No se puede generar la orden');
    await newOrderUtils.orderSeller(order, user._id, result._id);
    await newOrderUtils.alertsSend();

    // Conectarme a mercado pago ´para pobtener el linck de pago/////----------------------------------
    // Conectarme a mercado pago ´para pobtener el linck de pago/////----------------------------------
    // Conectarme a mercado pago ´para pobtener el linck de pago/////----------------------------------
    // Conectarme a mercado pago ´para pobtener el linck de pago/////----------------------------------

    return { status: 'success', result };
};

const getOrders = async (page, limit, userid, active, pay, { user }) => {
    const query = {};
    if (active !== undefined) query.active = active;
    if (userid) query.userId = userid;
    if (active !== undefined) query.active = active;
    if (pay !== undefined) query['pay.isPay'] = pay;
    const result = await orderRepository.getOrders(query, limit, page, user);
    if (!result) throw new OrderNotFound('No se puede encontrar la orden');
    return { status: 'success', result };
};

export { newOrder, getOrders };