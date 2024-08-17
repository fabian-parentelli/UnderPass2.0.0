import { alertsModel } from '../models/alerts.model.js';

export default class Alerts {

    newAlert = async (alerts) => {
        return await alertsModel.create(alerts);
    };

    getAlerts = async (userId) => {
        return await alertsModel.find({ userId: userId, active: true }).lean();
    };

};