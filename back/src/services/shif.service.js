import { shiftRepository, shiftCustomerRepository, shiftconfRepository } from "../repositories/index.repositories.js";
import { ShiftNotFound } from '../utils/custom-exceptions.utils.js';
import { sortShift, updateUserShifts } from "../utils/servicesUtils/shift.utils.js";

const newShift = async (shift) => {

    if (shift.customer?.email) await updateUserShifts(shift.customer);
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
        shift.isCustomer = true;
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