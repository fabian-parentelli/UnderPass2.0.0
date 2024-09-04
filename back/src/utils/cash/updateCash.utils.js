import { cashRepository } from "../../repositories/index.repositories.js";
import { CashNotFound } from "../custom-exceptions.utils.js";

const updateCashTotal = async (data) => {

    const cash = await cashRepository.getLast(data.country);
    if (!cash) throw new CashNotFound('No se encuentra la caja/tesoro');

    const newCash = {
        cash: cash.cash,
        treasure: cash.treasure,
        difCash: 0,
        difTreasure: 0,
        inOut: data.inOut,
        ticketId: data.ticketId,
        type: data.type,
        country: data.country
    };

    if (data.inOut === 'in') {
        newCash.cash += data.difCash;
        newCash.treasure += data.difTreasure;
        newCash.difCash = data.difCash;
        newCash.difTreasure = data.difTreasure;

    } else if (data.inOut === 'out') {
        newCash.cash -= data.difCash;
        newCash.treasure -= data.difTreasure;
        newCash.difCash = -data.difCash;
        newCash.difTreasure = -data.difTreasure;
    };

    cash.active = false;
    await cashRepository.update(cash);
    await cashRepository.newCash(newCash);
};

export default updateCashTotal;