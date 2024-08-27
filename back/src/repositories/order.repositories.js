import { orderManager } from '../dao/manager/index.manager.js';
import * as getOrdersUtil from '../utils/orderUtils/getOrderUtils.utils.js';

export default class OrderRepository {

    newOrders = async (order) => {
        const result = await orderManager.newOrders(order);
        return result;
    };

    getOrders = async (query, limit, page, user) => {
        const result = await orderManager.getOrders(query, limit, page);   
        const orders = await getOrdersUtil.getCart(result.docs, user);
        result.docs = orders;
        return result;
    };

};