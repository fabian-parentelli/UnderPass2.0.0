import { orderPayModel } from '../models/orderPay.model.js';

export default class OrderPay {

    newOrders = async (order) => {
        return await orderPayModel.create(order);
    };

    getData = async (country) => {
        return await orderPayModel.find({ country: country, 'pay.isPay': false });
    };

    getById = async (id) => {
        return await orderPayModel.findById(id).lean();
    };

    getOrdersPay = async (query, limit, page) => {
        return await orderPayModel.paginate(query, { limit, page, lean: true, sort: { date: -1 } })
    };

    update = async (order) => {
        return await orderPayModel.findByIdAndUpdate(order._id, order, { new: true, lean: true });
    };
};