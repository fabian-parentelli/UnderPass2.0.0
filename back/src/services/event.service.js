import { eventRepository, publicityRepository } from "../repositories/index.repositories.js";
import { EventNotFound } from '../utils/custom-exceptions.utils.js';
import { joinPublicity } from "../utils/joinPublicity.utils.js";

const newEvent = async (event) => {
    event.guests = event.guests.split(',');
    const result = await eventRepository.newEvent(event);
    if (!result) throw new EventNotFound('No se puede guardar el nuevo evento');

    // Acá lo que voy a hacer es cuando viene, el array con los sitios
    // actualizar el sitio con los id de los eventos, pensar esto luego para los 
    // productos también... *Y cuanod elimino un evento por algun motico hacerlo 
    // tambien en el sitio.

    return { status: 'success', result };
};

const newImg = async (imagesUrl, event) => {
    const eventdb = await eventRepository.getById(event._id);
    if (!eventdb) throw new EventNotFound('No se puede encontrar el evento');
    if (event.video) eventdb.video = event.video;
    eventdb.photo = { img: imagesUrl[0], isPreset: false, presetId: null };
    const result = await eventRepository.update(eventdb);
    if (!result) throw new EventNotFound('No se puede actualizar el evento');
    result.guests = result.guests.join(',');
    return { status: 'success', result };
};

const newPreset = async (preset) => {
    const eventdb = await eventRepository.getById(preset.eventId);
    if (!eventdb) throw new EventNotFound('No se puede encontrar el evento');
    if (preset.video) eventdb.video = preset.video;
    eventdb.photo = { isPreset: true, presetId: preset.presetId };
    const updates = await eventRepository.update(eventdb);
    if (!updates) throw new EventNotFound('No se puede actualizar el evento');
    const result = await eventRepository.getById(preset.eventId);
    result.guests = result.guests.join(',');
    return { status: 'success', result };
};

const getNotConfirm = async (uid) => {
    const result = await eventRepository.getNotConfirm({ userId: uid, confirm: false });
    if (!result) return { status: 'notEvent' };
    result.guests = result.guests.join(',');
    return { status: 'success', result };
};

const getEventById = async (id) => {
    const result = await eventRepository.getById(id);
    if (!result) throw new EventNotFound('No se puede encontrar el evento');
    return { status: 'success', result };
};

const getEventPublic = async (page, limit, active, country, publicity, category, province, startdate, title) => {
    const query = {};
    if (category) query.category = category;
    if (active !== undefined) query.active = active;
    if (country) query['location.country'] = { $regex: country, $options: "i" };
    if (province) query['location.province'] = { $regex: province, $options: "i" };
    if (startdate) query.startDate = new Date(startdate);
    if (title) query.title = { $regex: title, $options: "i" };
    const result = await eventRepository.getEvent(query, limit, page);
    if (!result) throw new EventNotFound('No se pueden encontrar los eventos');
    if (publicity === undefined) return { status: 'success', result };
    const querys = {
        country: { $in: [country, 'all'] },
        active: 'true',
        type: { $in: ['cards', 'separator'] }
    };
    const cards = await publicityRepository.getAll(querys, limit, page);
    result.docs = joinPublicity(result.docs, cards.docs);
    result.totalDocs = result.docs.length;
    return { status: 'success', result };
};

const getEvent = async ({ user }, page, limit, active, country, publicity, userid, category, province, startdate, title, favorite, confirm) => {
    const query = {};
    let sort = {};
    if (favorite && user.favorites && user.favorites.length > 0) query._id = { $in: user.favorites };
    if (user && user.role === 'user') {
        sort.provinceSort = user.location.province; sort.citySort = user.location.city
    };
    if (userid) query.userId = userid;
    if (category) query.category = category;
    if (active !== undefined) query.active = active;
    if (country) query['location.country'] = { $regex: country, $options: "i" };
    if (province) query['location.province'] = { $regex: province, $options: "i" };
    if (startdate) query.startDate = new Date(startdate);
    if (title) query.title = { $regex: title, $options: "i" };
    if (confirm === 'false') query.confirm = confirm;
    const result = await eventRepository.getEvent(query, limit, page, sort);
    if (!result) throw new EventNotFound('No se pueden encontrar los eventos');
    if (publicity === undefined) return { status: 'success', result };
    const querys = {
        country: { $in: [country, 'all'] },
        active: 'true',
        type: { $in: ['cards', 'separator'] }
    };
    const cards = await publicityRepository.getAll(querys, limit, page);
    result.docs = joinPublicity(result.docs, cards.docs);
    result.totalDocs = result.docs.length;
    return { status: 'success', result };
};

const updActive = async (id) => {
    const eventdb = await eventRepository.getById(id);
    if (!eventdb) throw new EventNotFound('No se puede encontrar el evento');
    eventdb.active = !eventdb.active;
    if (typeof eventdb.guests === 'string') eventdb.guests = event.guests.split(',');
    const upd = await eventRepository.update(eventdb);
    if (!upd) throw new EventNotFound('No se puede actualizar el evento');
    const result = await eventRepository.getById(id);
    result.guests = result.guests.join(',');
    return { status: 'success', result };
};

const confirm = async (id) => {
    const eventdb = await eventRepository.getById(id);
    if (!eventdb) throw new EventNotFound('No se puede encontrar el evento');
    eventdb.confirm = true;
    eventdb.active = true;
    const result = await eventRepository.update(eventdb);
    if (!result) throw new EventNotFound('No se puede actualizar el evento');
    return { status: 'success', result };
};

const putEvent = async (event) => {
    const eventdb = await eventRepository.getById(event._id);
    if (!eventdb) throw new EventNotFound('No se puede encontrar el evento');
    const objEvent = { ...eventdb, ...event };
    if (objEvent.typePublic) objEvent.password = '';
    if (typeof objEvent.guests === 'string') objEvent.guests = event.guests.split(',');
    const upd = await eventRepository.update(objEvent);
    if (!upd) throw new EventNotFound('No se puede actualizar el evento');
    const result = await eventRepository.getById(event._id);
    result.guests = result.guests.join(',');
    return { status: 'success', result };
};

export {
    newEvent, newImg, getEvent, getNotConfirm, putEvent, newPreset, confirm, getEventPublic, updActive, getEventById
};