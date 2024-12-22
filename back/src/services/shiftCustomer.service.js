import { shiftCustomerRepository } from "../repositories/index.repositories.js";
import { ShiftNotFound } from '../utils/custom-exceptions.utils.js';

const getShiftCustomerByUserId = async (userId) => {
    const result = await shiftCustomerRepository.getShiftCustomerByUserId(userId);
    if (!result) throw new ShiftNotFound('No se enucentran clientes');
    return { status: 'success', result };
};

export { getShiftCustomerByUserId };