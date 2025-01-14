import { codeRepository } from "../repositories/index.repositories.js";
import { CodeNotFound } from '../utils/custom-exceptions.utils.js';

const newCode = async (code) => {
    const result = await codeRepository.newCode(code);
    if (!result) throw new CodeNotFound('No se puede guardar el código');
    return { status: 'success', result };
};

const getCodes = async (name, type, page, active) => {
    const query = {};
    if (name) query.name = name;
    if (type) query.type = type;
    const result = await codeRepository.getCodes(query, page);
    if (!result) throw new CodeNotFound('No se puede guardar el código');
    return { status: 'success', result };
};

export { newCode, getCodes };