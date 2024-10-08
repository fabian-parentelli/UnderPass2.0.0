import { eventRepository } from "../repositories/index.repositories.js";
import { EventNotFound } from '../utils/custom-exceptions.utils.js';

const newEvent = async (event) => {
    event.guests = event.guests.split(',');
    const result = await eventRepository.newEvent(event);
    if (!result) throw new EventNotFound('No se puede guardar el nuevo evento');
    return { status: 'success', result };
};

const newImg = async (imagesUrl, event) => {
    const eventdb = await eventRepository.getById(event._id)
    if (!eventdb) throw new EventNotFound('No se puede encontrar el evento');
    eventdb.video = event.video;
    eventdb.photo = { img: imagesUrl[0], isFlyer: false };
    const result = await eventRepository.update(eventdb);
    if (!result) throw new EventNotFound('No se puede actualizar el evento');
    result.guests = result.guests.join(',');
    return { status: 'success', result };
};

const getNotConfirm = async (uid) => {
    const result = await eventRepository.getNotConfirm({ userId: uid, confirm: false });
    if (!result) return { status: 'notEvent' };
    result.guests = result.guests.join(',');
    return { status: 'success', result };
};

const putEvent = async (event) => {
    const eventdb = await eventRepository.getById(event._id)
    if (!eventdb) throw new EventNotFound('No se puede encontrar el evento');
    const objEvent = { ...eventdb, ...event };
    if (objEvent.type) objEvent.password = '';
    objEvent.guests = event.guests.split(',');
    const result = await eventRepository.update(objEvent);
    if (!result) throw new EventNotFound('No se puede actualizar el evento');
    result.guests = result.guests.join(',');
    return { status: 'success', result };
};

export { newEvent, newImg, getNotConfirm, putEvent };