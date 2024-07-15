import { priceBannerModel } from '../models/priceBanner.model.js';

export default class Price {

    newBannerPrice = async (price) => {
        return await priceBannerModel.create(price);
    };

    getLastBanner = async (country) => {
        return await priceBannerModel.findOne({ country: country }).sort({ date: -1 }).lean();
    };

    getAllBanner = async (country) => {
        return await priceBannerModel.find({ country: country }).sort({ date: 1 }).lean();
    };

};