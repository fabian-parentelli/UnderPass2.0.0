import { avatarModel } from '../models/avatar.model.js';

export default class Avatar {

    newAvatar = async (avatar) => {
        return await avatarModel.create(avatar);
    };

    getAvatars = async (query) => {
        return await avatarModel.find(query).lean();
    };

    getAvatarById = async (id) => {
        return await avatarModel.findById(id).lean();
    };

    updateAvatar = async (avatar) => {
        return await avatarModel.findByIdAndUpdate({ _id: avatar._id }, avatar).lean();
    };
}