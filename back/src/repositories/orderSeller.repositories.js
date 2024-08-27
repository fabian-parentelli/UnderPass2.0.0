import { orderSellerManager } from '../dao/manager/index.manager.js';
import * as getOrdersUtil from '../utils/orderUtils/getOrderUtils.utils.js';

export default class OrderSellerRepository {

    newOrder = async (order) => {
        const result = await orderSellerManager.newOrder(order);
        return result;
    };
    
    getOrders = async (order, user) => {
        const result = await orderSellerManager.getOrders(order);
        const orders = await getOrdersUtil.getCart(result.docs, user);        
        result.docs = orders;
        return result;
    };
};