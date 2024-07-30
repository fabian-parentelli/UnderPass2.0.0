import { productModel } from '../models/product.model.js';

export default class Product {

    newProduct = async (event) => {
        return await productModel.create(event);
    };

    getByUserId = async (id) => {
        return await productModel.find({ userId: id }).lean();
    };

    getProdById = async (id) => {
        return await productModel.findById(id).lean();
    };

    update = async (product) => {
        return await productModel.findByIdAndUpdate({ _id: product._id }, product, { new: true });
    };

};