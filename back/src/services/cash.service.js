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

const getAll = async (page, limit, userid, country, inOut, type, date) => {
    const query = {};
    if (userid) query.userId = userid;
    if (inOut) query.inOut = inOut;
    if (type) query.type = type;
    if (country) query.country = country;
    if (date) {
        const starDate = new Date(date).setUTCHours(0, 0, 0, 0);
        const endDate = new Date(date).setUTCHours(23, 59, 59, 999);
        query.date = { $gte: starDate, $lte: endDate };
    };
    const result = await cashRepository.getAll(query, limit, page);
    if (!result) throw new CashNotFound('No se puede obtener la caja');
    return { status: 'success', result };
};

export { newCash, getLast, getAll };