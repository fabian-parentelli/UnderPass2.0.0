import { orderManager } from '../dao/manager/index.manager.js';

export default class OrderRepository {

    newOrders = async (order) => {
        const result = await orderManager.newOrders(order);
        return result;
    };

};