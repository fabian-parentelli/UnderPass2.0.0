import { orderManager } from '../dao/manager/index.manager.js';
import * as getOrdersUtil from '../utils/orderUtils/getOrderUtils.utils.js';

export default class OrderRepository {

    newOrders = async (order) => {
        const result = await orderManager.newOrders(order);
        return result;
    };

    getOrderById = async (id) => {
        const result = await orderManager.getOrderById(id);
        return result;
    };
    
    getByArticle = async (id, user) => {
        const result = await orderManager.getByArticle(id);
        const orders = await getOrdersUtil.getCart(result, user);        
        return orders;
    };

    getOrders = async (query, limit, page, user) => {
        const result = await orderManager.getOrders(query, limit, page);
        const orders = await getOrdersUtil.getCart(result.docs, user);
        result.docs = orders;
        return result;
    };

    update = async (order) => {
        const result = await orderManager.update(order);
        return result;
    };
    
};