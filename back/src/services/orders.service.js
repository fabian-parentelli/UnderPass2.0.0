import { orderRepository } from "../repositories/index.repositories.js";
import * as newOrderUtils from '../utils/orderUtils/newOrderUtils.utils.js';
import { OrderNotFound } from "../utils/custom-exceptions.utils.js";

const newOrder = async (order, { user }) => {
    await newOrderUtils.updateUser(user._id, order.user);
    await newOrderUtils.updateStock(order.cart);
    const result = await newOrderUtils.newOrders(order, user._id);
    if (!result) throw new OrderNotFound('No se puede generar la orden');

    // Si el order.typePay es Mercado pago hacer el llamado acá para devolver linck en esta respuesta.......
    // Si el order.typePay es Mercado pago hacer el llamado acá para devolver linck en esta respuesta.......
    // Si el order.typePay es Mercado pago hacer el llamado acá para devolver linck en esta respuesta.......
    // Si el order.typePay es Mercado pago hacer el llamado acá para devolver linck en esta respuesta.......
    // Si el order.typePay es Mercado pago hacer el llamado acá para devolver linck en esta respuesta.......
    // Si el order.typePay es Mercado pago hacer el llamado acá para devolver linck en esta respuesta.......

    await newOrderUtils.orderSeller(order, user._id, result._id);
    await newOrderUtils.alertsSend(order.cart);
    return { status: 'success', result };
};

const getOrderById = async (id) => {
    const result = await orderRepository.getOrderById(id);
    if (!result) throw new OrderNotFound('No se puede encontrar la orden');
    return { status: 'success', result };
};

const getOrders = async (page, limit, userid, active, pay, { user }) => {
    const query = {};
    if (userid) query.userId = userid;
    if (active !== undefined) query.active = active;
    pay !== undefined ? query['pay.isPay'] = pay : query['pay.isPay'] = 'false';
    const result = await orderRepository.getOrders(query, limit, page, user);
    if (!result) throw new OrderNotFound('No se puede encontrar la orden');
    return { status: 'success', result };
};

export { newOrder, getOrderById, getOrders };