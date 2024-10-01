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

const getAll = async (page, limit, active, id, country, province, city, publicity, title, provinceSort, citySort) => {
    const query = {};
    if (title) query.title = title;
    if (country) query['location.country'] = { $regex: country, $options: "i" };
    if (province) query['location.province'] = { $regex: province, $options: "i" };
    if (city) query['location.city'] = { $regex: city, $options: "i" };
    if (active !== undefined) query.active = active;
    if (id) query._id = id;
    const result = await newsRepository.getAll(query, limit, page, { provinceSort, citySort });
    if (!result) throw new NewsNotFound('No se puede generar el nuevo documento');
    if (publicity == 'false') return { status: 'success', result };
    const querys = {
        country: { $in: [country, 'all'] },
        active: 'true',
        type: { $in: ['cards', 'separator'] }
    };
    const cards = await publicityRepository.getAll(querys, limit, page);
    result.docs = joinPublicity(result.docs, cards.docs);
    return { status: 'success', result };
};

const updActive = async (id) => {
    const news = await newsRepository.getById(id);
    news.active = !news.active;
    const result = await newsRepository.update(news);
    if (!result) throw new NewsNotFound('No se puede modificar el documento');
    return { status: 'success', result };
};

const updNews = async (imagesUrl, news) => {
    const { country, province, city, instagrame, facebook, twetter, youtube, ...newData } = news;
    newData.location = { country, province, city };
    newData.socialMedia = { instagrame, facebook, twetter, youtube };
    const imgArray = newData.img.split(',');
    const updatedImgArray = [...imgArray, ...imagesUrl];
    newData.img = updatedImgArray;
    const result = await newsRepository.update(newData);
    if (!result) throw new NewsNotFound('No se puede modificar el documento');
    return { status: 'success', result };
};

export { createNews, getById, getAll, updActive, updNews };