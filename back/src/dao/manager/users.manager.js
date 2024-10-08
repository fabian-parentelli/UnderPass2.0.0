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

    getAllUsers = async (query) => {
        return await userModel.find(query).lean();
    };

    getUserById = async (id) => {
        return await userModel.findById(id).lean();
    };

    paginates = async (query, options) => {
        return await userModel.paginate(query, options)
    };

    searchUser = async (name) => {
        const query = {
            role: { $ne: 'master' },
            $or: [{ name: { $regex: name, $options: 'i' } }]
        };
        return await userModel.paginate(query, { limit: 10, page: 1, lean: true });
    };

    userAmount = async (country) => {
        const filter = {
            role: { $nin: ["master", "admin"] },
            "location.country": { $regex: new RegExp(country, 'i') }
        };
        return await userModel.countDocuments(filter);
    };

    getFavorite = async (id) => {
        const user = await userModel.findById(id).select('favorites').lean();        
        return user ? user.favorites : [];
    };

};