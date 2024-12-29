import { shiftconfRepository } from "../repositories/index.repositories.js";
import { ShiftNotFound } from '../utils/custom-exceptions.utils.js';

const newShift = async (shifts, imgUrl) => {
    const shift = JSON.parse(shifts.values);
    if (!shift._id) {
        if (imgUrl) shift.img = { url: imgUrl[0] };
        const result = await shiftconfRepository.newShift(shift);
        if (!result) throw new ShiftNotFound('No se puede guardar la configuración');
        return { status: 'success', result };
    } else {
        const shiftDB = await shiftconfRepository.getById(shift._id);
        const shiftUpdate = { ...shiftDB, ...shift };
        if (imgUrl.length > 0) shiftUpdate.img.url = imgUrl[0];
        const result = await shiftconfRepository.update(shiftUpdate);
        if (!result) throw new ShiftNotFound('No se puede guardar la configuración');
        return { status: 'success', result };
    };
};

const getPublicShiftconf = async (page, limit, country, active, province, category, title, days) => {
    const query = {};
    if (category) query.category = category;
    if (active !== undefined) query.active = active;
    if (country) query['location.country'] = { $regex: country, $options: "i" };
    if (province) query['location.province'] = { $regex: province, $options: "i" };
    if (title) query.title = { $regex: title, $options: "i" };
    if (days) {
        const daysArray = days.split(',');
        query.days = { $in: daysArray };
    };
    const result = await shiftconfRepository.getShiftconf(query, page, limit);
    if (result.docs.length < 1) throw new ShiftNotFound('No se encuentra configuración previa');
    return { status: 'success', result };
};

const getShiftconfById = async (id) => {
    const result = await shiftconfRepository.getById(id);
    if (!result) throw new ShiftNotFound('No se encuentra configuración previa');
    return { status: 'success', result };
};

const getShiftconf = async (page, limit, country, active, province, category, title, favorite, userid, days) => {
    const query = {};
    if (category) query.category = category;
    if (active !== undefined) query.active = active;
    if (country) query['location.country'] = { $regex: country, $options: "i" };
    if (province) query['location.province'] = { $regex: province, $options: "i" };
    if (title) query.title = { $regex: title, $options: "i" };
    if (favorite) {
        const favorites = favorite.split(',');
        query._id = { $in: favorites }
    };
    if (userid) query.userId = userid;
    if (days) {
        const daysArray = days.split(',');
        query.days = { $in: daysArray };
    };
    const result = await shiftconfRepository.getShiftconf(query, page, limit);
    if (result.docs.length < 1) throw new ShiftNotFound('No se encuentra configuración previa');
    return { status: 'success', result };
};

const updActive = async (id) => {
    const shift = await shiftconfRepository.getById(id);
    if (!shift) throw new ShiftNotFound('No se encuentra la confiuración');
    shift.active = !shift.active;
    const result = await shiftconfRepository.update(shift);
    if (!result) throw new ShiftNotFound('No se puede actualizar el turno');
    return { status: 'success', result };
};

export { newShift, getShiftconf, getShiftconfById, getPublicShiftconf, updActive };