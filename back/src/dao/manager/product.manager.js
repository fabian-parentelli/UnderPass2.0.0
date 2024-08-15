import { productModel } from '../models/product.model.js';

export default class Product {

    newProduct = async (event) => {
        return await productModel.create(event);
    };

    getByUserId = async (id) => {
        return await productModel.find({ userId: id }).lean();
    };

    getByTipsSearch = async (query = {}, name) => {
        const nameQuery = { name: { $regex: name, $options: 'i' } };
        const combinedQuery = { ...query, ...nameQuery };
        return await productModel.paginate(combinedQuery, { limit: 40, page: 1, lean: true });
    };

    getProdById = async (id) => {
        return await productModel.findById(id).lean();
    };

    getRandom = async (country, limit = 11) => {
        return await productModel.aggregate([{ $match: { 'location.country': country } }, { $sample: { size: limit } }]).exec();
    };

    update = async (product) => {
        return await productModel.findByIdAndUpdate({ _id: product._id }, product, { new: true });
    };

    getAll = async (query, limit, page) => {
        return await productModel.paginate(query, { limit, page, lean: true, sort: { date: -1 } });
    };

    productAmount = async (country) => {
        const filter = {
            "location.country": { $regex: new RegExp(country, 'i') },
            active: true
        };
        return await productModel.countDocuments(filter);
    };

};