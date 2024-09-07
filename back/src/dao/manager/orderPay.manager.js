import { orderPayModel } from '../models/orderPay.model.js';

export default class OrderPay {

    newOrders = async (order) => {
        return await orderPayModel.create(order);
    };

    getOrdersPay = async (query, limit, page) => {
        return await orderPayModel.paginate(query, { limit, page, lean: true, sort: { date: -1 } })
    };
};