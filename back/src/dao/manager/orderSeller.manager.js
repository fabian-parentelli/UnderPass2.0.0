import { orderSellerModel } from '../models/orderSeller.model.js';

export default class OrderSeller {

    newOrder = async (order) => {
        return await orderSellerModel.create(order);
    };

    getOrders = async (query, limit, page) => {
        return await orderSellerModel.paginate(query, { limit, page, lean: true, sort: { date: -1 } })
    };

    getById = async (id) => {
        return await orderSellerModel.findById(id).lean();
    };

    getOrderByUserId = async (id) => {
        return await orderSellerModel.find({ sellerUserId: id, 'pay.payOut.isPayOut': false });
    };

    getOrdersUpdate = async (query) => {
        return await orderSellerModel.find(query).lean();
    };

    update = async (order) => {
        return await orderSellerModel.findByIdAndUpdate(order._id, order, { new: true, lean: true });
    };

};