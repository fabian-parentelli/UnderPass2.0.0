import { orderManager } from '../dao/manager/index.manager.js';

export default class OrderRepository {

    newOrder = async (order) => {
        const result = await orderManager.newOrder(order);
        return result;
    };

};