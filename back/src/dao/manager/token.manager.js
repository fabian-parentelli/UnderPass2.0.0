import { tokenModel } from '../models/token.model.js';

export default class Token {

    getByUserId = async (id) => {
        return await tokenModel.findOne({ userId: id }).lean();
    };

    newToken = async (token) => {
        return await tokenModel.create(token);
    };

    update = async (token) => {
        return await tokenModel.findByIdAndUpdate(token._id, token, { new: true, lean: true });
    };

};