import { shiftRepository, shiftCustomerRepository } from "../repositories/index.repositories.js";
import { ShiftNotFound } from '../utils/custom-exceptions.utils.js';

const newShift = async (shift) => {
    if (!shift.customer?.customerId) {
        const isCustomers = await shiftCustomerRepository.getShiftCustomerByEmail(shift.customer?.email);
        if (isCustomers) {
            shift.customer = isCustomers._id;
            shift.isCustomer = true;
        } else {
            const customer = await shiftCustomerRepository.newCustomer({ ...shift.customer, userId: shift.userId, isCustomer: true });
            shift.customer = customer._id;
            shift.isCustomer = customer.isCustomer;
        };
    };
    if (shift.customer?.customerId) {
        shift.customer = shift.customer.customerId;
        shift.isCustomer = shift.customer.isCustomer;
    };
    const result = await shiftRepository.newShift(shift);
    if (!result) throw new ShiftNotFound('No se puede reservar el turno');
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

const getShifts = async (uid, month, year) => {
    const query = {
        'day.month': { $in: month.split(',') },
        'day.year': year,
        active: true
    };
    if (uid) query.userId = uid;
    const result = await shiftRepository.getShifts(query);
    if (!result) throw new ShiftNotFound('No se pueden ver los turnos');
    return { status: 'success', result };
};

export { newShift, getDataShift, getShifts };