import { orderModel } from '../models/order.model.js';

export default class Order {

    newOrders = async (order) => {
        return await orderModel.create(order);
    };

    getOrders = async (query, limit, page) => {
        return await orderModel.paginate(query, { limit, page, lean: true, sort: { date: -1 } })
    };
};