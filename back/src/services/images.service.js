import { imagenRepository } from "../repositories/index.repositories.js";
import { ImagenNotFound } from '../utils/custom-exceptions.utils.js';

const newVideoTut = async (video) => {
    const result = await imagenRepository.newVideoTut(video);
    if (!result) throw new ImagenNotFound('No se puede guardar el video tutorial');
    return { status: 'success', result };
};

const getAllVideos = async () => {
    const result = await imagenRepository.getAllVideos();
    if (!result) throw new ImagenNotFound('No se puede encontrar los video tutoriales');
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

export { newVideoTut, getAllVideos, getVideoTutByName, activeVideo };