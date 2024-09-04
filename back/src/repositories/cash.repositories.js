import { cashManager } from '../dao/manager/index.manager.js';

export default class CashRepository {

    newCash = async (cash) => {
        const result = await cashManager.newCash(cash);
        return result;
    };

    getLast = async (country) => {
        const result = await cashManager.getLast(country);
        return result;
    };

    update = async (cash) => {
        const result = await cashManager.update(cash);
        return result;
    };
    
};