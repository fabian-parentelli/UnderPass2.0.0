import { priceManager, dataManager } from '../dao/manager/index.manager.js';

export default class PriceRepository {

    // DataPass

    newDataPass = async (data) => {
        const result = await dataManager.newDataPass(data);
        return result;
    };

    getDataPass = async (country) => {
        const result = await dataManager.getDataPass(country);        
        return result;
    };
    
    updDataPass = async (data) => {
        const result = await dataManager.updDataPass(data);        
        return result;
    };

    // Prices

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