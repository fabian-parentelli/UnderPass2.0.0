import { shiftRepository, shiftconfRepository, shiftCustomerRepository } from "../repositories/index.repositories.js";
import { ShiftNotFound } from '../utils/custom-exceptions.utils.js';
import { emailToCustomer, sortShift, updateCustomer } from "../utils/servicesUtils/shift.utils.js";

const newShift = async (shift) => {
    const customer = await updateCustomer(shift);
    shift.customer = customer;
    const result = await shiftRepository.newShift(shift);
    if (!result) throw new ShiftNotFound('No se puede reservar el turno');
    await emailToCustomer(result);
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
    const result = usercustomer ? sortShift(data) : customer ? sortShift(data) : data;
    return { status: 'success', result };
};

export { newShift, getDataShift, getShifts };