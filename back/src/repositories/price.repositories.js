import { priceBannerManager } from '../dao/manager/index.manager.js';

export default class PriceRepository {

    // Banners ...

    newBannerPrice = async (price) => {
        const result = await priceBannerManager.newBannerPrice(price);
        return result;
    };

    getLastBanner = async (country) => {
        const result = await priceBannerManager.getLastBanner(country);
        return result;
    };
    
    getAllBanner = async (country) => {
        const result = await priceBannerManager.getAllBanner(country);
        return result;
    };

};