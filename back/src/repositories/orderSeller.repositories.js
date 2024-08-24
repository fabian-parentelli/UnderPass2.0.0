import { orderSellerManager } from '../dao/manager/index.manager.js';

export default class OrderSellerRepository {

    newOrder = async (order) => {
        const result = await orderSellerManager.newOrder(order);
        return result;
    };

};