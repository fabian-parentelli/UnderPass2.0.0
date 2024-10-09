import { eventRepository } from "../repositories/index.repositories.js";
import { EventNotFound } from '../utils/custom-exceptions.utils.js';

const newEvent = async (event) => {
    event.guests = event.guests.split(',');
    const result = await eventRepository.newEvent(event);
    if (!result) throw new EventNotFound('No se puede guardar el nuevo evento');
    return { status: 'success', result };
};

const getNotConfirm = async (uid) => {
    const result = await eventRepository.getNotConfirm({ userId: uid, confirm: false });
    if (!result) return { status: 'notEvent' };
    result.guests = result.guests.join(',');
    return { status: 'success', result };
};

export { newEvent, getNotConfirm };