import { alertsManager, publicityManager } from '../dao/manager/index.manager.js';

export default class AlertsRepository {

    newAlert = async (alert) => {
        const result = await alertsManager.newAlert(alert);
        return result;
    };

    getAlerts = async (userId) => {
        const result = await alertsManager.getAlerts(userId);
        const updatedAlerts = await Promise.all(result.map(async (alert) => {
            if (alert.type === 'publicity') alert.data = await publicityManager.getById(alert.eventId);
            return alert;
        }));
        return updatedAlerts;
    };
}