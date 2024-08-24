import { orderModel } from '../models/order.model.js';

export default class Order {

    newOrder = async (order) => {
        return await orderModel.create(order);
    };
};