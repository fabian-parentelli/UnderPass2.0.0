import { shiftRepository, shiftCustomerRepository } from "../repositories/index.repositories.js";
import { ShiftNotFound } from '../utils/custom-exceptions.utils.js';

const newShift = async (shift) => {
    if (!shift.customer.customerId) {        
        const customer = await shiftCustomerRepository.newCustomer({ ...shift.customer, userId: shift.userId, isCustomer: true });
        shift.customer = customer._id;
        shift.isCustomer = customer.isCustomer;
    };
    if (shift.customer.customerId) {
        shift.customer = shift.customer.customerId;
        shift.isCustomer = shift.customer.isCustomer;
    };
    const result = await shiftRepository.newShift(shift);
    if (!result) throw new ShiftNotFound('No se puede reservar el turno');
    return { status: 'success', result };
};

const getDataShift = async (uid, month, year, day, room, sections) => {
    const query = { userId: uid, ['day.month']: month, ['day.year']: year };
    if (room) query.room = room;
    if (sections) query.sections = sections;
    const result = await shiftRepository.getDataShift(query, day);
    if (!result) throw new ShiftNotFound('No se puede reservar el turno');
    return { status: 'success', result };
};

export { newShift, getDataShift };