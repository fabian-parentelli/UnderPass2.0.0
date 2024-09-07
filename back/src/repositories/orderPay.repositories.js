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
};