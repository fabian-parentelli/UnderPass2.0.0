import { bannersModel } from '../models/banners.model.js';

export default class Banners {

    newBanners = async (tutorial) => {
        return await bannersModel.create(tutorial);
    };

};