import { imagenRepository } from "../repositories/index.repositories.js";
import { ImagenNotFound } from '../utils/custom-exceptions.utils.js';

const newVideoTut = async (video) => {
    const result = await imagenRepository.newVideoTut(video);
    if (!result) throw new ImagenNotFound('No se puede guardar el video tutorial');
    return { status: 'success', result };
};

const newBanners = async (banner, imgUrl) => {
    banner.imgUrl = imgUrl;
    banner.date = new Date();
    banner.end = banner.birthday;
    delete banner.birthday;
    const result = await imagenRepository.newBanners(banner);
    if (!result) throw new ImagenNotFound('No se puede guardar el banner');
    return { status: 'success', result };
};

const newAvatar = async (avatar, imgUrl) => {
    avatar.imgUrl = imgUrl[0];
    const result = await imagenRepository.newAvatar(avatar);
    if (!result) throw new ImagenNotFound('No se puede guardar el avatar');
    return { status: 'success', result };
};

const getAllVideos = async () => {
    const result = await imagenRepository.getAllVideos();
    if (!result) throw new ImagenNotFound('No se puede encontrar los video tutoriales');
    return { status: 'success', result };
};

const getBannerBody = async () => {
    const banners = await imagenRepository.getBannerBody();
    if (!banners) throw new ImagenNotFound('No se encuentran las imagenes');
    const result = banners.sort(() => Math.random() - 0.5);
    return { status: 'success', result };
};

const getAllBanners = async (limit, page, active, country, category) => {
    const query = {};
    if (category) query.category = { $regex: category, $options: "i" };
    if (country) query.country = { $regex: country, $options: "i" };
    if (active !== undefined) query.active = active;
    const result = await imagenRepository.getAllBanners(query, limit, page);
    if (!result) throw new ImagenNotFound('No se encuentran los banners');
    return { status: 'success', result };
};

const avatarActive = async (id) => {
    const avatar = await imagenRepository.getAvatarById(id);
    if (!avatar) throw new ImagenNotFound('No se encuentra el avatar');
    avatar.active = !avatar.active;
    const result = await imagenRepository.updateAvatar(avatar);
    if (!result) throw new ImagenNotFound('No se encuentra el avatar');
    return { status: 'success', result };
};

const getAvatars = async (type) => {
    const query = {};
    if (type === 'user') query.active = true;
    const result = await imagenRepository.getAvatars(query);
    if (!result) throw new ImagenNotFound('No se encuentran los avatars');
    return { status: 'success', result };
};

const getVideoTutByName = async (name) => {
    const result = await imagenRepository.getVideoTutByName(name);
    if (!result) throw new AvatarNotFound('No se encuentra el video seleccionado');
    return { status: 'success', result };
};

const activeVideo = async ({ id }) => {
    const img = await imagenRepository.getVideoById(id);
    if (!img) throw new ImagenNotFound('No se puede encontrar los video tutoriales');
    img.active = !img.active;
    const result = await imagenRepository.updateVideo(img);
    if (!result) throw new ImagenNotFound('No se puede actualizar el video');
    return { status: 'success', result };
};

const updBanner = async (upd, id) => {
    const banner = await imagenRepository.getBannerById(id);
    if (!banner) throw new ImagenNotFound('No se encuentra el banner');
    if (upd.links) banner.links = upd.links;
    if (upd.end) banner.end = upd.end;
    const result = await imagenRepository.updateBanner(banner);
    if (!result) throw new ImagenNotFound('No se puede actualizar el banner');
    return { status: 'success', result };
};

const updBannerActive = async (id) => {
    const banner = await imagenRepository.getBannerById(id);
    if (!banner) throw new ImagenNotFound('No se encuentra el banner');
    banner.active = !banner.active;
    const result = await imagenRepository.updateBanner(banner);
    if (!result) throw new ImagenNotFound('No se puede actualizar el banner');
    return { status: 'success', result };
};

export {
    newVideoTut, newBanners, getAllVideos, getAllBanners,
    getVideoTutByName, activeVideo, updBanner, updBannerActive,
    getBannerBody, newAvatar, getAvatars, avatarActive
};