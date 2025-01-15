import { codeRepository } from "../repositories/index.repositories.js";
import { CodeNotFound } from '../utils/custom-exceptions.utils.js';

const newCode = async (code) => {
    const result = await codeRepository.newCode(code);
    if (!result) throw new CodeNotFound('No se puede guardar el código');
    return { status: 'success', result };
};

const getCodes = async (name) => {
    const result = await codeRepository.getCodes(name);
    if (!result) throw new CodeNotFound('No se encuentra el código');
    return { status: 'success', result };
};

const updCodes = async (code) => {
    const codeDB = await codeRepository.getCodeById(code._id)
    if (!codeDB) throw new CodeNotFound('No se encuentra el código');
    const newCode = { ...codeDB, ...code };
    const result = await codeRepository.update(newCode);
    if (!result) throw new CodeNotFound('No se puede actualizar el código');
    return { status: 'success', result };
};

export { newCode, getCodes, updCodes };