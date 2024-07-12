import { tutorialsManager } from '../dao/manager/index.manager.js';

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

};