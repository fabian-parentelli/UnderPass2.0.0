import { publicityRepository } from "../repositories/index.repositories.js";
import { PublicityNotFound } from '../utils/custom-exceptions.utils.js';

const newPublicity = async (publicity, imgUrl) => {
    publicity.imgUrl = imgUrl;
    publicity.date = new Date();
    publicity.end = publicity.birthday;
    delete publicity.birthday;
    const result = await publicityRepository.newPublicity(publicity);
    if (!result) throw new PublicityNotFound('No se puede guardar el banner');
    return { status: 'success', result };
};

export { newPublicity };