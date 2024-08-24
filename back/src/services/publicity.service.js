import { publicityRepository } from "../repositories/index.repositories.js";
import { PublicityNotFound } from '../utils/custom-exceptions.utils.js';

const newPublicity = async (publicity, imgUrl) => {
    publicity.imgUrl = imgUrl;
    publicity.date = new Date();
    publicity.end = publicity.birthday;
    delete publicity.birthday;
    if (publicity.application) publicity.application = { userId: publicity.application, userVew: false };
    const result = await publicityRepository.newPublicity(publicity);
    if (!result) throw new PublicityNotFound('No se puede guardar el publicity');
    return { status: 'success', result };
};

const getByUserId = async (id, active) => {
    const result = await publicityRepository.getByUserId(id, active);
    if (!result) throw new PublicityNotFound('No se encuentran los anuncios publiocitarios');
    return { status: 'success', result };
};

const getBanner = async (country) => {
    const query = { active: true };
    query.type = 'banners';
    query.country = { $in: [country, 'all'] };
    const result = await publicityRepository.getAll(query, { limit: 100, page: 1 });
    if(!result) throw new PublicityNotFound('No se encuentra ningun banner');
    return { status: 'success', result };
};

const getAmountInPortal = async () => {
    const result = await publicityRepository.getAmountInPortal({ inPortal: true, active: true });
    if (!result) return { status: 'none', result };
    return { status: 'success', result };
};

const getAll = async (limit, page, active, country, category, type, inPortal, id) => {
    const query = {};
    if (id) query._id = id;
    if (country) query.country = { $regex: country, $options: "i" };
    if (category) query.category = { $regex: category, $options: "i" };
    if (active !== undefined) query.active = active;
    if (inPortal !== undefined) query.inPortal = inPortal;
    if (type) query.type = { $regex: type, $options: "i" };
    const result = await publicityRepository.getAll(query, limit, page);
    if (!result) throw new PublicityNotFound('No se encuentran los anuncios publiocitarios');
    return { status: 'success', result };
};

const updUserVew = async (user) => {
    const publicity = await publicityRepository.getByUserId(user._id)
    publicity.forEach(async (pub) => {
        pub.application.userVew = true
        await publicityRepository.update(pub);
    });
};

const updActive = async (id) => {
    const publicity = await publicityRepository.getById(id);
    if (!publicity) throw new PublicityNotFound('No se encuentra el anuncio publicitario');
    publicity.active = !publicity.active;
    if (!publicity.active && publicity.inPortal) publicity.inPortal = false;
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

export {
    newPublicity, getAll, updPublicity, updActive, updPortal, updUserVew, getByUserId,
    getAmountInPortal, getBanner
};