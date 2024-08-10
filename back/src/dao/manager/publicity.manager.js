import { publicityModel } from '../models/publicity.model.js';

export default class Publicity {

    newPublicity = async (tutorial) => {
        return await publicityModel.create(tutorial);
    };

    getAll = async (query, limit, page) => {
        return await publicityModel.paginate(query, { limit, page, lean: true, sort: { date: -1 } });
    };

    update = async (publicity) => {
        return await publicityModel.findByIdAndUpdate({ _id: publicity._id }, publicity, { new: true });
    };

    getByUserId = async (id) => {
        return await publicityModel.find({ 'application.userId': id }).lean();
    };

    getById = async (id) => {
        return await publicityModel.findById(id).lean();
    };

    getUserVew = async (id) => {
        return await publicityModel.countDocuments({ 'application.userId': id, 'application.userVew': false });
    };

};