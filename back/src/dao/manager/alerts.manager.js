import { alertsModel } from '../models/alerts.model.js';

export default class Alerts {

    newAlert = async (alerts) => {
        return await alertsModel.create(alerts);
    };

    getAlerts = async (query) => {        
        return await alertsModel.find(query).lean();
    };

    getById = async (id) => {
        return await alertsModel.findById(id).lean();
    };

    getPaginate = async (limit, page, query) => {
        return await alertsModel.paginate(query, { limit, page, lean: true, sort: { date: -1 } })
    };

    update = async (alert) => {
        return await alertsModel.findByIdAndUpdate({ _id: alert._id }, alert, { new: true });
    };

};