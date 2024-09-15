import { orderPayManager, alertsManager, userManager, financialUserManager } from '../dao/manager/index.manager.js';

export default class OrderPayRepository {

    newOrders = async (order) => {
        const result = await orderPayManager.newOrders(order);
        const alerts = {
            eventId: result._id,
            userId: '668d9529cf8bde76a0dc3adb',
            type: 'havePay'
        };
        await alertsManager.newAlert(alerts);
        return result;
    };

    generateOrder = async (order) => {
        const result = await orderPayManager.newOrders(order);
        return result;
    };

    getData = async (country) => {
        const result = await orderPayManager.getData(country);
        const users = [];
        for (const ord of result) {
            const user = await userManager.getUserById(ord.userId);
            const userData = { name: user.name, userId: user._id };
            const isUser = users.some(us => us.userId.equals(userData.userId));
            if(!isUser) users.push(userData);
        };
        return users;
    };

    getById = async (id) => {
        const result = await orderPayManager.getById(id);
        return result;
    };

    getOrdersPay = async (query, limit, page) => {
        const result = await orderPayManager.getOrdersPay(query, limit, page);
        for (const ord of result.docs) {
            const user = await userManager.getUserById(ord.userId);
            const userData = {
                name: user.name,
                email: user.email,
                phone: user.phone || '',
                finaceData: await financialUserManager.getFinanceByUserId(ord.userId)
            };
            ord.userData = userData;
        };
        return result;
    };

    update = async (order) => {
        const result = await orderPayManager.update(order);
        return result;
    };
};