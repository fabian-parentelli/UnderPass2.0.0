import { newsManager } from '../dao/manager/index.manager.js';
import orderByLocation from '../utils/orderByLocation.utils.js';
import { NewsNotFound, OrderNotFound } from '../utils/custom-exceptions.utils.js';

export default class NewsRepository {

    createNews = async (news) => {
        const result = await newsManager.createNews(news);
        return result;
    };

    getById = async (id) => {
        const result = await newsManager.getById(id);
        return result;
    };

    getAll = async (query, limit, page, sort) => {
        const data = await newsManager.getAll(query, limit, page);
        if (!sort.provinceSort && !sort.citySort) return data;
        const result = orderByLocation(data, sort);
        if (!result) throw new OrderNotFound('No se puede ordenar los documentos');
        return result;
    };

    update = async (news) => {
        const result = await newsManager.update(news);
        return result;
    };
    
};