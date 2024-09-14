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

    getAll = async (query, limit, page) => {
        const result = await cashManager.getAll(query, limit, page);
        return result;
    };

    update = async (cash) => {
        const result = await cashManager.update(cash);
        return result;
    };

};