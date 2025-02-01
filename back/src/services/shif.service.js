import {
    shiftRepository, shiftconfRepository, customerRepository, postponeRepository,
    alertsRepository
} from "../repositories/index.repositories.js";
import { ShiftNotFound } from '../utils/custom-exceptions.utils.js';
import * as shiftUtils from "../utils/servicesUtils/shift.utils.js"; // Proximamanet eliminarlo para organizar, mejor
import * as indexShift from '../utils/servicesUtils/shifts/index.shift.utils.js';
import { shiftSuccessHtml } from "../utils/html/shiftSccessHtml.utils.js";
import { sendEmail } from "./email.service.js";

const newPostpone = async (postpone) => {
    const { shift, to, message } = postpone;
    const result = await postponeRepository.newPostpone({ shiftId: shift._id, to, message, adminId: shift.userId });
    if (!result) throw new ShiftNotFound('No se puede enviar la propuesta de posponer.');
    const comunication = await indexShift.emailPostponer(postpone, result);
    if (!comunication) throw new ShiftNotFound(`No pudimos contactar al ${to === 'admin' ? 'Administrador' : 'Cliente'}`);
    return { status: 'success', result };
};

const newShift = async (shift, { user }) => {
    if (user.role === 'user' && shift.userId !== user._id) shift.isPay = true;
    const shiftData = { ...shift };
    const customer = await indexShift.updateCustomer(shift);
    shift.customer = customer;
    const result = await shiftRepository.newShift(shift);
    if (!result) throw new ShiftNotFound('Error para generar un nuevo turno');
    const emailTo = {
        to: shiftData.customer.email,
        subject: `Agendaste un turno en ${shiftData.dataConf.title}`,
        html: await shiftSuccessHtml(shiftData, result)
    };
    const emailGo = await sendEmail(emailTo);
    if (!emailGo) throw new ShiftNotFound('Error al enviar eamil al cliente');
    return { status: 'success', result };
};

const getDataShift = async (uid, month, year, day, room, sections) => {
    const query = { ['day.month']: month, ['day.year']: year, active: true };
    if (uid) query.userId = uid;
    if (room) query.room = room;
    if (sections) query.sections = sections;
    const result = await shiftRepository.getDataShift(query, day);
    if (!result) throw new ShiftNotFound('No se puede reservar el turno');
    return { status: 'success', result };
};

const getPostponeByAdminId = async (id, active) => {
    const result = await postponeRepository.getByAdminId(id, active)
    if (!result) throw new ShiftNotFound('No se puede obtener las propuestas de porponer');
    return { status: 'success', result };
};

const getPostponeById = async (id, { user }) => {
    const result = await postponeRepository.getById(id, user);
    if (!result) throw new ShiftNotFound('No se puede ver la alerta');
    return { status: 'success', result };
};

const getShifts = async (uid, month, year, customer, usercustomer, user, id, active, place) => {
    const query = {};
    active !== undefined ? query.active = active : query.active = true;
    if (id) query._id = id;
    if (customer) query.customer = customer;
    if (usercustomer && user) {
        const customerData = await customerRepository.getShiftCustomerByEmail(user.email);
        if (customerData) query.customer = customerData._id;
        else return { status: 'success', result: [] };
    };
    if (month) query['day.month'] = { $in: month.split(',') };
    if (year) query['day.year'] = year;
    if (uid) query.userId = uid;
    const data = await shiftRepository.getShifts(query);
    if (!data) throw new ShiftNotFound('No se pueden ver los turnos');
    if (usercustomer || place !== undefined) {
        for (const dat of data) {
            const placeDB = await shiftconfRepository.getByUserId(dat.userId);
            dat.place = { name: placeDB.title, shiftId: placeDB._id, img: placeDB.img.url };
        };
    };
    const result = usercustomer ? shiftUtils.sortShift(data) : customer ? shiftUtils.sortShift(data) : data;
    return { status: 'success', result };
};

const suspendPanel = async (data, { user }) => {
    // { id: '678b885812796a0966381d4b', admin: true, password: 'casa' }
    const shift = await shiftRepository.getById(data.id);
    const result = await (data.admin
        ? indexShift.suspendByPanel(shift, user)
        : indexShift.suspendByPanelUs(shift, user)
    );
    return result;
};

const activePostpone = async (id) => {
    const postpone = await postponeRepository.getById(id);
    const { shiftId: shift, ...rest } = postpone;
    rest.shiftId = shift._id;
    rest.active = false;
    const result = await postponeRepository.update(rest);
    if (!result) throw new ShiftNotFound('No se puede ver la alerta');
    return { status: 'success', result };
};

const actPostByShId = async (id) => {
    const postpone = await postponeRepository.getByShiftId(id);
    const { shiftId: shift, ...rest } = postpone;
    rest.shiftId = shift._id;
    rest.active = false;
    const result = await postponeRepository.update(rest);
    if (!result) throw new ShiftNotFound('No se puede ver la alerta');
    return { status: 'success', result };
};

const updShift = async (id, shift, { user }) => {
    const result = await indexShift.updateDateShift(id, shift, user);
    if (!result) throw new ShiftNotFound('Error al actualizar la nueva reserva');
    return result;
};

const getPostponeMax = async (days) => {
    const total = await postponeRepository.postponeAmount() || 0;
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - +days);
    const defeated = await postponeRepository.getPostPone({ date: { $lt: cutoffDate } }) || [];
    return { total, defeated };
};

const getShiftMax = async (days) => {
    const total = await shiftRepository.shiftAmount() || 0;
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - +days);
    const defeated = await shiftRepository.getShifts({ date: { $lt: cutoffDate } }) || [];    
    return { total, defeated };
};

const delPostponeById = async (id) => {
    const result = await postponeRepository.delPostponeById(id);
    if (!result) throw new ShiftNotFound('Error al eliminar el postpone de base de datos');
    return { status: 'success', result };
};

const delShiftById = async (id) => {
    const result = await shiftRepository.delShiftById(id);
    if (!result) throw new ShiftNotFound('Error al eliminar el turno de la base de datos');
    return { status: 'success', result };
};

const delAllpostpones = async ({ ids }) => {
    const result = await postponeRepository.deleteMany({ _id: { $in: ids } })
    if (!result) throw new AllertsNotFound(`No se pueden eliminar las propuestas`);
    return { status: 'success', result };
};

const delAllShifts = async ({ ids }) => {
    const result = await shiftRepository.deleteMany({ _id: { $in: ids } })
    if (!result) throw new AllertsNotFound(`No se pueden eliminar las propuestas`);
    return { status: 'success', result };
};

export {
    newPostpone, newShift, getDataShift, getPostponeByAdminId, getPostponeById, getShifts,
    activePostpone, updShift, suspendPanel, actPostByShId, getPostponeMax, delPostponeById, delAllpostpones,
    getShiftMax, delShiftById, delAllShifts
};