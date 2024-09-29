import { newsRepository, publicityRepository } from "../repositories/index.repositories.js";
import { joinPublicity } from "../utils/joinPublicity.utils.js";
import { NewsNotFound } from '../utils/custom-exceptions.utils.js';

const createNews = async (imagesUrl, news) => {
    const { country, province, city, instagrame, facebook, twetter, youtube, ...newData } = news;
    newData.img = imagesUrl;
    newData.location = { country, province, city };
    newData.socialMedia = { instagrame, facebook, twetter, youtube };
    const result = await newsRepository.createNews(newData);
    if (!result) throw new NewsNotFound('No se puede generar el nuevo documento');
    return { status: 'success', result };
};

const getById = async (id) => {
    const result = await newsRepository.getById(id);
    if (!result) throw new NewsNotFound('No se puede encontrar el documento');
    return { status: 'success', result };
};

const getAll = async (page, limit, active, id, country, province, city, publicity, title) => {
    const query = {};
    if(title) query.title = title;
    if (country) query['location.country'] = { $regex: country, $options: "i" };
    if (province) query['location.province'] = { $regex: province, $options: "i" };
    if (city) query['location.city'] = { $regex: city, $options: "i" };
    if (active !== undefined) query.active = active;
    if (id) query._id = id;
    const result = await newsRepository.getAll(query, limit, page);
    if (!result) throw new NewsNotFound('No se puede generar el nuevo documento');
    if(publicity == 'false') return { status: 'success', result };
    const querys = {
        country: { $in: [country, 'all'] },
        active: 'true',
        type: { $in: ['cards', 'separator'] }
    };
    const cards = await publicityRepository.getAll(querys, limit, page);
    result.docs = joinPublicity(result.docs, cards.docs);
    return { status: 'success', result };
};

export { createNews, getById, getAll };