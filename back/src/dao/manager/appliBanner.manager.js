import { aplliBannersModel } from '../models/appliBanners.model.js';

export default class Banners {

    applBanner = async (tutorial) => {
        return await aplliBannersModel.create(tutorial);
    };

};