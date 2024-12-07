import { shiftconfRepository } from "../repositories/index.repositories.js";
import { ShiftNotFound } from '../utils/custom-exceptions.utils.js';

const newShift = async (shifts, imgUrl) => {
    const shift = JSON.parse(shifts.values);
    shift.img = imgUrl[0];
    
    const result = await shiftconfRepository.newShift(shift);
    if (!result) throw new ShiftNotFound('No se puede guardar la configuración');
    return { status: 'success', result };
};

export { newShift };