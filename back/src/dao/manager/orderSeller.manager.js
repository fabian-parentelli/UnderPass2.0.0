import { orderSellerModel } from '../models/orderSeller.model.js';

export default class OrderSeller {

    newOrder = async (order) => {
        return await orderSellerModel.create(order);
    };

    getOrders = async (query, limit, page) => {
        return await orderSellerModel.paginate(query, { limit, page, lean: true, sort: { date: -1 } })
    };
};