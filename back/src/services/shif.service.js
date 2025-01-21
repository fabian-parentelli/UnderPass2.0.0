import {
    shiftRepository, shiftconfRepository, shiftCustomerRepository, shiftPostponeRepository
} from "../repositories/index.repositories.js";
import { ShiftNotFound } from '../utils/custom-exceptions.utils.js';
import * as shiftUtils from "../utils/servicesUtils/shift.utils.js";

const newPostpone = async (postpone) => {
    const { shift, to, message } = postpone;
    const result = await shiftPostponeRepository.newPostpone({ shiftId: shift._id, to, message });
    if (!result) throw new ShiftNotFound('No se puede enviar la propuesta de posponer.');
    const comunication = await shiftUtils.emailPostponer(postpone, result);
    if (!comunication) throw new ShiftNotFound(`No pudimos contactar al ${to === 'admin' ? 'Administrador' : 'Cliente'}`);
    return { status: 'success', result };
};

const newShift = async (shift) => {
    const shiftData = { ...shift };
    const customer = await shiftUtils.updateCustomer(shift);
    shift.customer = customer;
    const result = await shiftRepository.newShift(shift);
    if (!result) throw new ShiftNotFound('No se puede reservar el turno');
    await shiftUtils.emailToCustomer(shiftData, result);
    return { status: 'success', result };
};

const getDataShift = async (uid, month, year, day, room, sections) => {
    const query = { ['day.month']: month, ['day.year']: year };
    if (uid) query.userId = uid;
    if (room) query.room = room;
    if (sections) query.sections = sections;
    const result = await shiftRepository.getDataShift(query, day);
    if (!result) throw new ShiftNotFound('No se puede reservar el turno');
    return { status: 'success', result };
};

const getPostponeById = async (id) => {
    const result = await shiftPostponeRepository.getById(id);
    if (!result) throw new ShiftNotFound('No se puede ver la alerta');
    return { status: 'success', result };
};

const getShifts = async (uid, month, year, customer, usercustomer, user) => {
    const query = { active: true };
    if (customer) query.customer = customer;
    if (usercustomer && user) {
        const customerData = await shiftCustomerRepository.getShiftCustomerByEmail(user.email);
        if (customerData) query.customer = customerData._id;
        else return { status: 'success', result: [] };
    };
    if (month) query['day.month'] = { $in: month.split(',') };
    if (year) query['day.year'] = year;
    if (uid) query.userId = uid;
    const data = await shiftRepository.getShifts(query);
    if (!data) throw new ShiftNotFound('No se pueden ver los turnos');
    if (usercustomer) {
        for (const dat of data) {
            const placeDB = await shiftconfRepository.getByUserId(dat.userId);
            dat.place = { name: placeDB.title, shiftId: placeDB._id };
        };
    };
    const result = usercustomer ? shiftUtils.sortShift(data) : customer ? shiftUtils.sortShift(data) : data;
    return { status: 'success', result };
};

export { newPostpone, newShift, getDataShift, getPostponeById, getShifts };