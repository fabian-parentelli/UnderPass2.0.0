import { postponeRepository } from "../repositories/index.repositories.js";
import { ShiftNotFound } from '../utils/custom-exceptions.utils.js';
import * as postpUtils from '../utils/servicesUtils/shift_postpone/index.postpone.utils.js';

const newPostpone = async (postpone) => {
    const { shift, to, message } = postpone;
    const result = await postponeRepository.newPostpone({ shiftId: shift._id, to, message, adminId: shift.userId });
    if (!result) throw new ShiftNotFound('No se puede enviar la propuesta de posponer.');
    const comunication = await postpUtils.emailPostponer(postpone, result);
    if (!comunication) throw new ShiftNotFound(`No pudimos contactar al ${to === 'admin' ? 'Administrador' : 'Cliente'}`);
    return { status: 'success', result };
};

const getByAdminId = async (id, active) => {
    const result = await postponeRepository.getByAdminId(id, active);
    if (!result) throw new ShiftNotFound('No se puede obtener las propuestas de porponer');
    return { status: 'success', result };
};

const getById = async (id, { user }) => {
    const result = await postponeRepository.getById(id, user);
    if (!result) throw new ShiftNotFound('No se puede ver la alerta');
    return { status: 'success', result };
};

const activeByShiftId = async (id) => {
    const postpone = await postponeRepository.getByShiftId(id);
    const { shiftId: shift, ...rest } = postpone;
    rest.shiftId = shift._id;
    rest.active = false;
    const result = await postponeRepository.update(rest);
    if (!result) throw new ShiftNotFound('No se puede ver la alerta');
    return { status: 'success', result };
};

const denied = async (id) => {
    const postpone = await postponeRepository.getById(id);
    if (!postpone) throw new ShiftNotFound('Error al obtener la propuesta de la base de datos');
    const result = postpUtils.postponeDenied(postpone);
    if (!result) throw new ShiftNotFound('Error al suspender el turno');
    return { status: 'success', result };
};

const active = async (id) => {
    const postpone = await postponeRepository.getById(id);
    const { shiftId: shift, ...rest } = postpone;
    rest.shiftId = shift._id;
    rest.active = false;
    const result = await postponeRepository.update(rest);
    if (!result) throw new ShiftNotFound('No se puede ver la alerta');
    return { status: 'success', result };
};

const deleteAll = async ({ ids }) => {
    const result = await postponeRepository.deleteMany({ _id: { $in: ids } })
    if (!result) throw new AllertsNotFound(`No se pueden eliminar las propuestas`);
    return { status: 'success', result };
};

const deleteById = async (id) => {
    const result = await postponeRepository.deleteById(id);
    if (!result) throw new ShiftNotFound('Error al eliminar el postpone de base de datos');
    return { status: 'success', result };
};

export { newPostpone, getByAdminId, getById, activeByShiftId, denied, active, deleteAll, deleteById };