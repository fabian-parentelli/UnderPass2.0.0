import { priceManager } from '../dao/manager/index.manager.js';

export default class PriceRepository {

    newPrice = async (price) => {
        const result = await priceManager.newPrice(price);
        return result;
    };

    getLastPrice = async (country, name) => {
        const result = await priceManager.getLastPrice(country, name);
        return result;
    };
    
    getAllPrice = async () => {
        const result = await priceManager.getAllPrice();
        return result;
    };

};