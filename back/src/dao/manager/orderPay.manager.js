import { orderPayModel } from '../models/orderPay.model.js';

export default class OrderPay {

    newOrders = async (order) => {
        return await orderPayModel.create(order);
    };
};