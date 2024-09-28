import { newsModel } from '../models/news.model.js';

export default class News {

    createNews = async (event) => {
        return await newsModel.create(event);
    };

    getById = async (id) => {
        return await newsModel.findById(id).lean();
    };

    getAll = async (query, limit, page) => {
        return await newsModel.paginate(query, { limit, page, lean: true, sort: { date: -1 } });
    };
};