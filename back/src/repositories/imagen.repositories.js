import { tutorialsManager, avatarManager, presetManager } from '../dao/manager/index.manager.js';

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

    // Avatars ----------------------------------------------

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

    // Presets ------------------------------------------------

    newPresets = async (presets) => {
        const result = await presetManager.newPresets(presets);
        return result;
    };
    
    getPreset = async () => {
        const result = await presetManager.getPreset();
        return result;
    };
    
    getPresetById = async (id) => {
        const result = await presetManager.getPresetById(id);
        return result;
    };
    
    updatePreset = async (preset) => {
        const result = await presetManager.updatePreset(preset);
        return result;
    };

};