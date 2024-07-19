import { appliRepository } from "../repositories/index.repositories.js";
import { ImagenNotFound } from '../utils/custom-exceptions.utils.js';

const appliBanner = async (application, imgUrl) => {
    application.img = imgUrl;
    const result = await appliRepository.appliBanner(application);
    if (!result) throw new ImagenNotFound('No se puede guardar la petición');
    return { status: 'success', result };
};

export { appliBanner };