import { postponeRepository } from "../repositories/index.repositories.js";
import { ShiftNotFound } from '../utils/custom-exceptions.utils.js';
import * as postpUtils from '../utils/servicesUtils/shift_postpone/index.postpone.utils.js';

const denied = async (id) => {
    const postpone = await postponeRepository.getById(id);
    if (!postpone) throw new ShiftNotFound('Error al obtener la propuesta de la base de datos');
    const result = postpUtils.postponeDenied(postpone);
    if (!result) throw new ShiftNotFound('Error al suspender el turno');
    return { status: 'success', result };
};

export { denied };