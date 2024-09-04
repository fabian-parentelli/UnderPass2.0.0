import { cashRepository } from "../repositories/index.repositories.js";
import { CashNotFound } from '../utils/custom-exceptions.utils.js';

const newCash = async () => {
    const cash = await cashRepository.getLast();
    if (cash) throw new CashNotFound('Ya existe la caja y el tesoro');
    const countries = ['AR', 'UY'];
    for (const cont of countries) {
        const obj = {
            cash: 0, treasure: 0, difCash: 0, difTreasure: 0, country: cont,
        };
        await cashRepository.newCash(obj);
    };
};

const getLast = async () => {
    let result = {};
    const countries = ['AR', 'UY'];
    for (const cont of countries) {
        const data = await cashRepository.getLast(cont);
        result[cont] = { cash: data.cash, treasure: data.treasure };
    };
    if (!result) return { status: 'error' };
    return { status: 'success', result };
};

export { newCash, getLast };