import { appliRepository } from "../repositories/index.repositories.js";
import { ImagenNotFound } from '../utils/custom-exceptions.utils.js';

const appliBanner = async (application, imgUrl) => {
    application.img = imgUrl;
    const result = await appliRepository.appliBanner(application);
    if (!result) throw new ImagenNotFound('No se puede guardar la petición');
    return { status: 'success', result };
};

const getBanners = async (limit, page, active, country, category, type, pay) => {

    if(limit) console.log(limit);
    if(page) console.log(page);
    if(active) console.log(active);
    if(country) console.log(country);
    if(category) console.log(category);
    if(type) console.log(type);
    if(pay) console.log(pay);

    console.log('cosa loca');

    // bueno estoy aca haciendo las peticiones ..........
};

export { appliBanner, getBanners };