import { orderSellerModel } from '../models/orderSeller.model.js';

export default class OrderSeller {

    newOrder = async (order) => {
        return await orderSellerModel.create(order);
    };
};