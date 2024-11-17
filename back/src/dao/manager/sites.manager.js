import { sitesModel } from '../models/sites.model.js';

export default class Sites {

    newSite = async (site) => {
        return await sitesModel.create(site);
    };

    getByTitle = async (title) => {
        return await sitesModel.findOne({ title: { $regex: new RegExp(`^${title}$`, 'i') } }).lean();
    };    

    getByUserId = async (uid) => {
        return await sitesModel.find({ userId: uid }).lean();
    };

    getByLinks = async (link) => {
        return await sitesModel.findOne({ link: link }).lean();
    };

    getRandom = async (country, limit = 16) => {
        return await sitesModel.aggregate([{ $match: { 'location.country': country, active: true } }, { $sample: { size: limit } }]).exec();
    };

    getSites = async (query, page, limit) => {
        return await sitesModel.paginate(query, { limit, page, lean: true, sort: { date: -1 } });
    };

    getById = async (id) => {
        return await sitesModel.findById(id).lean();
    };

    update = async (site) => {
        return await sitesModel.findByIdAndUpdate(site._id, site, { lean: true, new: true });
    };
};