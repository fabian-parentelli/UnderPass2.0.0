import { bannersModel } from '../models/banners.model.js';

export default class Banners {

    newBanners = async (tutorial) => {
        return await bannersModel.create(tutorial);
    };

    getBannerBody = async () => {
        return await bannersModel.find({ active: true }).lean();
    };

    getAllBanners = async (query = {}, limit = 10, page = 1) => {
        return await bannersModel.paginate(query, { limit, page, lean: true, sort: { date: -1 } });
    };

    getBannerById = async (id) => {
        return await bannersModel.findById(id).lean();
    };

    updateBanner = async (banner) => {
        return await bannersModel.findByIdAndUpdate({ _id: banner._id }, banner);
    };

};