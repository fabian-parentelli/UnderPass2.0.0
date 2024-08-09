import { apllicationModel } from '../models/application.model.js';

export default class Application {

    newApplication = async (application) => {
        return await apllicationModel.create(application);
    };

    getAll = async (query, limit, page) => {
        return await apllicationModel.paginate(query, { limit, page, lean: true, sort: { date: -1 } });
    };

    getAppById = async (id) => {
        return await apllicationModel.findById(id).lean();
    };

    getByUserId = async (id) => {
        return await apllicationModel.find({ userId: id }).lean();
    };

    update = async (application) => {
        return await apllicationModel.findByIdAndUpdate({ _id: application._id }, application).lean();
    };

    getUnderVew = async () => {
        return await apllicationModel.countDocuments({ underVew: true });
    };

};