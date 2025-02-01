import { customerRepository } from "../repositories/index.repositories.js";
import { ShiftNotFound } from '../utils/custom-exceptions.utils.js';

const getShiftCustomerByUserId = async (userId) => {
    const result = await customerRepository.getShiftCustomerByUserId(userId);
    if (!result) throw new ShiftNotFound('No se enucentran clientes');
    return { status: 'success', result };
};

export { getShiftCustomerByUserId };