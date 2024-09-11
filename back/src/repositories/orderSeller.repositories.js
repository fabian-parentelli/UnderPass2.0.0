import { orderSellerManager } from '../dao/manager/index.manager.js';
import * as getOrdersUtil from '../utils/orderUtils/getOrderUtils.utils.js';

export default class OrderSellerRepository {

    newOrder = async (order) => {
        const result = await orderSellerManager.newOrder(order);
        return result;
    };
    
    getOrders = async (query, limit, page, user) => {
        const result = await orderSellerManager.getOrders(query, limit, page, user);
        const orders = await getOrdersUtil.getCart(result.docs, user);        
        result.docs = orders;
        return result;
    };

    getById = async (id, user) => {
        const result = await orderSellerManager.getById(id);
        const order = [];
        order.push(result);        
        const orders = await getOrdersUtil.getCart(order, user); 
        const newResult = orders[0];
        return newResult;
    };

    getOrdersUpdate = async (query) => {
        const result = await orderSellerManager.getOrdersUpdate(query);
        return result;
    };

    update = async (order) => {
        const result = await orderSellerManager.update(order);
        return result;
    };
};