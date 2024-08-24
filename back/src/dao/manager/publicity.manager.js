import { publicityModel } from '../models/publicity.model.js';

export default class Publicity {

    newPublicity = async (tutorial) => {
        return await publicityModel.create(tutorial);
    };

    getByUserId = async (id, active = true) => {       
        return await publicityModel.find({ 'application.userId': id, active: active }).lean();
    };

    getAmountInPortal = async (query) => {
        return await publicityModel.countDocuments(query);
    };

    getAll = async (query, limit, page) => {        
        return await publicityModel.paginate(query, { limit, page, lean: true, sort: { date: -1 } });
    };

    update = async (publicity) => {
        return await publicityModel.findByIdAndUpdate({ _id: publicity._id }, publicity, { new: true });
    };

    getById = async (id) => {
        return await publicityModel.findById(id).lean();
    };

    getUserVew = async (id) => {
        return await publicityModel.countDocuments({ 'application.userId': id, 'application.userVew': false });
    };

};