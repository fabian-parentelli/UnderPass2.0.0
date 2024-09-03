import { cashManager } from '../dao/manager/index.manager.js';

export default class CashRepository {

    newCash = async (cash) => {
        const result = await cashManager.newCash(cash);
        return result;
    };
}