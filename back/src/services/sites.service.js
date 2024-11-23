import { sitesRepository } from "../repositories/index.repositories.js";
import { SitesNotFound } from '../utils/custom-exceptions.utils.js';
import { newSiteOptions } from "../utils/servicesUtils/sites.utils.js";

const newSite = async (images, imagesUrl, body) => {
    const sit = JSON.parse(body.values);
    let site = {};
    let result = {};
    if (sit._id) site = await sitesRepository.getById(sit._id);
    const sites = newSiteOptions(images, imagesUrl, sit, site);
    if (sit._id) result = await sitesRepository.update(sites);
    else result = await sitesRepository.newSite(sites)
    if (!result) throw new SitesNotFound('No se pueden guardar los datos');
    return { status: 'success', result };
};

const getByUserId = async (uid) => {
    const result = await sitesRepository.getByUserId(uid);
    if (!result) throw new SitesNotFound('No se encuentra el sitio');
    return { status: 'success', result };
};

const getById = async (id) => {
    const result = await sitesRepository.getById(id);
    if (!result) throw new SitesNotFound('No se encuentra el sitio');
    return { status: 'success', result };
};

const getByLinks = async (link) => {
    const result = await sitesRepository.getByLinks(link);
    if (!result) throw new SitesNotFound('No se encuentra el sitio');
    return { status: 'success', result };
};

const getRandom = async (country) => {
    const result = await sitesRepository.getRandom(country);
    if (!result) throw new SitesNotFound('No se encuentra el sitio');
    return { status: 'success', result };
};

const getSites = async (page, limit, country, active, province, category, title, favorite, userid) => {
    const query = {};
    if (category) query.category = category;
    if (active !== undefined) query.active = active;
    if (country) query['location.country'] = { $regex: country, $options: "i" };
    if (province) query['location.province'] = { $regex: province, $options: "i" };
    if (title) query.title = { $regex: title, $options: "i" };
    if (favorite) {
        const favorites = favorite.split(',');
        query._id = { $in: favorites }
    };
    const result = await sitesRepository.getSites(query, page, limit);
    if (!result) throw new SitesNotFound('No se encuentra el sitio');
    return { status: 'success', result };
};

const updActive = async (id) => {
    const site = await sitesRepository.getById(id);
    site.active = !site.active;
    const result = await sitesRepository.update(site);
    if (!result) throw new SitesNotFound('No se puede actualizar el sitio');
    return { status: 'success', result };
};

const updSite = async (images, imagesUrl, body) => {
    const title = await sitesRepository.getByTitle(body.title);
    const site = await sitesRepository.getById(body._id);
    if (title && body.title !== site.title) throw new SitesNotFound('Ya existe este titulo, prueba con otro');
    let img;
    if (images && imagesUrl) {
        img = images.map((img, ind) => {
            const name = img.originalname.split('_')[1];
            const positionKey = `position_${name}`;
            return { name, url: imagesUrl[ind], position: body[positionKey] };
        });
    };
    // const img = [
    //     {
    //       name: 'castNewImg0',
    //       url: 'https://res.cloudinary.com/dtzy75wyt/image/upload/v1731858391/sites/aborigenescachafaz/q359ca2ezbwdz3hf62vw.ppp',
    //       position: 'center'
    //     }
    //   ]
    // const siteToUpdate = updSitesOption(img, body, site);
    const result = await sitesRepository.update(siteToUpdate);
    if (!result) throw new SitesNotFound('No se puede actualizar el sitio');
    return { status: 'success', result };
};

export { newSite, getByUserId, getById, getByLinks, getRandom, getSites, updActive, updSite };