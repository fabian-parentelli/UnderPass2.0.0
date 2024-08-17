import { alertsManager, publicityManager } from '../dao/manager/index.manager.js';

export default class AlertsRepository {

    newAlert = async (alert) => {
        const result = await alertsManager.newAlert(alert);
        return result;
    };

    getAlerts = async (query) => {
        const result = await alertsManager.getAlerts(query);
        const updatedAlerts = await Promise.all(result.map(async (alert) => {
            if (alert.type === 'publicityOff') alert.data = await publicityManager.getById(alert.eventId);
            //
            // Seguir agregando distintos tipos de tipos de avisos...
            //
            return alert;
        }));
        return updatedAlerts;
    };

    getPaginate = async (limit, page, query) => {
        const result = await alertsManager.getPaginate(limit, page, query);
        const updatedAlerts = await Promise.all(result.docs.map(async (alert) => {
            if (alert.type === 'publicityOff') alert.data = await publicityManager.getById(alert.eventId);
            //
            // Seguir agregando distintos tipos de tipos de avisos...
            //
            return alert;
        }));
        result.docs = updatedAlerts;
        return result;
    };

    getById = async (id) => {
        const result = await alertsManager.getById(id);
        return result;
    };

    update = async (alert) => {
        const result = await alertsManager.update(alert);
        return result;
    };
}