import { cashRepository } from "../repositories/index.repositories.js";
import { CashNotFound } from '../utils/custom-exceptions.utils.js';

const newCash = async (cash) => {
    const result = await cashRepository.newCash(cash);
    if (!result) throw new CashNotFound('No se puede generar el pago');
    return { status: 'success', result };
};

export { newCash };