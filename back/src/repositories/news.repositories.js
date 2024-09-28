import { newsManager } from '../dao/manager/index.manager.js';

export default class NewsRepository {

    createNews = async (news) => {
        const result = await newsManager.createNews(news);
        return result;
    };
    
    getById = async (id) => {
        const result = await newsManager.getById(id);
        return result;
    };

    getAll = async (query, limit, page) => {
        const result = await newsManager.getAll(query, limit, page);
        return result;
    };
    
};