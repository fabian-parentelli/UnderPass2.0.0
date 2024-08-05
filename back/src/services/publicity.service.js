import { publicityRepository } from "../repositories/index.repositories.js";
import { PublicityNotFound } from '../utils/custom-exceptions.utils.js';

const newPublicity = async (publicity, imgUrl) => {
    publicity.imgUrl = imgUrl;
    publicity.date = new Date();
    publicity.end = publicity.birthday;
    delete publicity.birthday;
    const result = await publicityRepository.newPublicity(publicity);
    if (!result) throw new PublicityNotFound('No se puede guardar el publicity');
    return { status: 'success', result };
};

const getAll = async (limit, page, active, country, category, type, inPortal) => {    
    const query = {};
    if (country) query.country = { $regex: country, $options: "i" };
    if (category) query.category = { $regex: category, $options: "i" };
    if (active !== undefined) query.active = active;
    if (inPortal !== undefined) query.inPortal = inPortal;
    if (type) query.type = { $regex: type, $options: "i" };
    const result = await publicityRepository.getAll(query, limit, page);    
    if (!result) throw new PublicityNotFound('No se encuentran los anuncios publiocitarios');
    return { status: 'success', result };
};

const updActive = async (id) => {
    const publicity = await publicityRepository.getById(id);
    if (!publicity) throw new PublicityNotFound('No se encuentra el anuncio publicitario');
    publicity.active = !publicity.active;
    if(!publicity.active && publicity.inPortal) publicity.inPortal = false;
    const result = await publicityRepository.update(publicity);
    if (!result) throw new PublicityNotFound('No se puede actualizar el anuncio publicitario');
    return { status: 'success', result };
};

const updPortal = async (id) => {
    const publicity = await publicityRepository.getById(id);
    if (!publicity) throw new PublicityNotFound('No se encuentra el anuncio publicitario');
    publicity.inPortal = !publicity.inPortal;
    const result = await publicityRepository.update(publicity);
    if (!result) throw new PublicityNotFound('No se puede actualizar el anuncio publicitario');
    return { status: 'success', result };
};

const updPublicity = async (upd, id) => {
    const publicity = await publicityRepository.getById(id);
    if (!publicity) throw new ImagenNotFound('No se encuentra el anuncio publicitario');
    if (upd.links) publicity.links = upd.links;
    if (upd.end) publicity.end = upd.end;
    const result = await publicityRepository.update(publicity);    
    if (!result) throw new PublicityNotFound('No se puede actualizar el publicity');
    return { status: 'success', result };
};

export { newPublicity, getAll, updPublicity, updActive, updPortal };