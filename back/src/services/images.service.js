import { imagenRepository } from "../repositories/index.repositories.js";
import { ImagenNotFound } from '../utils/custom-exceptions.utils.js';

const newVideoTut = async (video) => {
    const result = await imagenRepository.newVideoTut(video);
    if (!result) throw new ImagenNotFound('No se puede guardar el video tutorial');
    return { status: 'success', result };
};

const newAvatar = async (avatar, imgUrl) => {
    avatar.imgUrl = imgUrl[0];
    const result = await imagenRepository.newAvatar(avatar);
    if (!result) throw new ImagenNotFound('No se puede guardar el avatar');
    return { status: 'success', result };
};

const newPresets = async (preset, imgUrl) => {
    preset.img = imgUrl[0];
    const result = await imagenRepository.newPresets(preset)
    if (!result) throw new ImagenNotFound('No se puede guardar el Presets');
    return { status: 'success', result };
};

const getAllVideos = async () => {
    const result = await imagenRepository.getAllVideos();
    if (!result) throw new ImagenNotFound('No se puede encontrar los video tutoriales');
    return { status: 'success', result };
};

const getPreset = async () => {
    const result = await imagenRepository.getPreset();
    if (!result) throw new ImagenNotFound('No se puede obtener los presets');
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

const presetActive = async (id) => {
    const preset = await imagenRepository.getPresetById(id);
    if (!preset) throw new ImagenNotFound('No se puede encontrar el preset');
    preset.active = !preset.active
    const result = await imagenRepository.updatePreset(preset);
    if (!result) throw new ImagenNotFound('No se puede actualizar el preset');
    return { status: 'success', result };
};

export {
    newVideoTut, getAllVideos, getVideoTutByName, activeVideo, newAvatar,
    getAvatars, avatarActive, newPresets, getPreset, presetActive
};