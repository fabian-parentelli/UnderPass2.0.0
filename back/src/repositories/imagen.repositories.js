import { tutorialsManager, avatarManager } from '../dao/manager/index.manager.js';

export default class ImagenRepository {

    newVideoTut = async (video) => {
        const result = await tutorialsManager.newVideoTut(video);
        return result;
    };

    getAllVideos = async () => {
        const result = await tutorialsManager.getAllVideos();
        return result;
    };

    getVideoTutByName = async (name) => {
        const result = await tutorialsManager.getVideoTutByName(name);
        return result;
    };

    getVideoById = async (id) => {
        const result = await tutorialsManager.getVideoById(id);
        return result;
    };

    updateVideo = async (img) => {
        const result = await tutorialsManager.updateVideo(img);
        return result;
    };

    // Avatars -----------------------------------------

    newAvatar = async (avatar) => {
        const result = await avatarManager.newAvatar(avatar);
        return result;
    };
    
    getAvatars = async (query) => {
        const result = await avatarManager.getAvatars(query);
        return result;
    };
    
    getAvatarById = async (id) => {
        const result = await avatarManager.getAvatarById(id);
        return result;
    };
    
    updateAvatar = async (avatar) => {
        const result = await avatarManager.updateAvatar(avatar);
        return result;
    };
};