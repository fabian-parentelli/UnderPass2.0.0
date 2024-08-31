import { dataModel } from '../models/data.model.js';

export default class Data {

    newDataPass = async (data) => {
        return await dataModel.create(data);
    };

    getDataPass = async (country) => {
        return await dataModel.findOne({ country: country }).lean();
    };

    updDataPass = async (data) => {
        return await dataModel.findByIdAndUpdate(data._id, data, { new: true }).lean();
    };

};