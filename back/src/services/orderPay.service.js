import { orderPayRepository } from "../repositories/index.repositories.js";
import { OrderNotFound } from '../utils/custom-exceptions.utils.js';

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

export { getOrdersPay, getOrderById }