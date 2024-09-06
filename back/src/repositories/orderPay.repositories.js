import { orderPayManager } from '../dao/manager/index.manager.js';

export default class OrderPayRepository {

    newOrders = async (order) => {
        const result = await orderPayManager.newOrders(order);
        return result;
    };
}