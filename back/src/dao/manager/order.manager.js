import { orderModel } from '../models/order.model.js';

export default class Order {

    newOrders = async (order) => {
        return await orderModel.create(order);
    };
};