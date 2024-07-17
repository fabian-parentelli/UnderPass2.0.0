import { tutorialsManager, bannersManager, appliBannerManager } from '../dao/manager/index.manager.js';

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

    // -- Banners -- ---------

    newBanners = async (video) => {
        const result = await bannersManager.newBanners(video);
        return result;
    };

    getBannerBody = async () => {
        const result = await bannersManager.getBannerBody();
        for (let i = result.length - 1; i >= 0; i--) {
            if (result[i].end < new Date()) {
                result[i].active = false;
                await bannersManager.updateBanner(result[i]);
                result.splice(i, 1);
            };
        };
        return result;
    };

    getAllBanners = async (query, limit, page) => {
        const result = await bannersManager.getAllBanners(query, limit, page);
        return result;
    };

    getBannerById = async (id) => {
        const result = await bannersManager.getBannerById(id);
        return result;
    };
    
    updateBanner = async (banner) => {
        const result = await bannersManager.updateBanner(banner);
        return result;
    };

    // Aplication Banner ------------

    applBanner = async (application) => {
        const result = await appliBannerManager.applBanner(application);
        return result;
    };

};