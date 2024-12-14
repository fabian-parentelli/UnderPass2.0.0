import { shiftRepository } from "../repositories/index.repositories.js";
import { ShiftNotFound } from '../utils/custom-exceptions.utils.js';

const newShift = async (shift) => {
    const result = await shiftRepository.newShift(shift);
    if (!result) throw new ShiftNotFound('No se puede reservar el turno');
    return { status: 'success', result };
};

const getDataShift = async (uid, month, year, day, room, sections) => {
    const query = { userId: uid, ['day.month']: month, ['day.year']: year };
    if(room) query.room = room;
    if(sections) query.sections = sections;    
    const result = await shiftRepository.getDataShift(query, day);
    if (!result) throw new ShiftNotFound('No se puede reservar el turno');    
    return { status: 'success', result };
};

export { newShift, getDataShift };