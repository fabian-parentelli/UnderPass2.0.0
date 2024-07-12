import { userModel } from '../models/users.model.js';

export default class User {

    register = async (user) => {
        return await userModel.create(user);
    };

    getByEmail = async (email) => {
        return await userModel.findOne({ email: email }).lean();
    };

    update = async (user) => {
        return await userModel.findByIdAndUpdate({ _id: user._id }, user, { new: true }).lean();
    };

    getByIdPass = async (id) => {
        return await userModel.findOne({ passId: id }).lean(); s
    };

};