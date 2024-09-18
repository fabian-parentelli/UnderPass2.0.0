import { orderModel } from '../models/order.model.js';

export default class Order {

    newOrders = async (order) => {
        return await orderModel.create(order);
    };

    getOrderById = async (id) => {        
        return await orderModel.findById(id).lean();
    };

    getByArticle = async (id) => {
        return await orderModel.find({ cart: { $elemMatch: { typeId: id } } }).lean();
    };

    getOrders = async (query, limit, page) => {
        return await orderModel.paginate(query, { limit, page, lean: true, sort: { date: -1 } })
    };

    update = async (order) => {
        return await orderModel.findByIdAndUpdate(order._id, order, { new: true, lean: true });
    };
};