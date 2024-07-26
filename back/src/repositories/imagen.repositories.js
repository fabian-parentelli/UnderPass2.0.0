import { tutorialsManager, bannersManager, avatarManager } from '../dao/manager/index.manager.js';

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
        const today = new Date().setHours(0, 0, 0, 0);
        const updatedBanners = result.filter(banner => {
            const bannerEndDate = new Date(banner.end).setHours(0, 0, 0, 0);
            if (bannerEndDate < today) {
                banner.active = false;
                bannersManager.updateBanner(banner);
                return false;
            };
            return true;
        });
        return updatedBanners;
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