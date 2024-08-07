import { priceModel } from '../models/price.model.js';

export default class Price {

    newPrice = async (price) => {
        return await priceModel.create(price);
    };

    getLastPrice = async (country, name) => {
        return await priceModel.findOne({ country: { $regex: country, $options: "i" }, name: name }).sort({ date: -1 });
    };

    getAllPrice = async () => {
        return await priceModel.aggregate([
            { $sort: { country: 1, name: 1, date: -1 } },
            { $group: { _id: { country: "$country", name: "$name" }, latestItem: { $first: "$$ROOT" } } },
            { $replaceRoot: { newRoot: "$latestItem" } }
        ]);
    };

};