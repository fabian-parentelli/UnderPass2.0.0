import { sitesRepository } from "../repositories/index.repositories.js";
import { SitesNotFound } from '../utils/custom-exceptions.utils.js';
import { updSitesOption } from "../utils/servicesUtils/sites.utils.js";

const newSite = async (images, imagesUrl, body) => {
    const nameIs = await sitesRepository.getByTitle(body.title);
    if (nameIs) throw new SitesNotFound('Este nombre ya está en uso');
    const site = {
        title: body.title,
        category: body.category,
        subCategory: body.subCategory,
        userId: body.userId,
        link: body.folderName.split('/')[1],
        location: { city: body.city, province: body.province, country: body.country },
        images: images.map((img, ind) => {
            const name = img.originalname.split('_')[1];
            const positionKey = `position_${name}`;
            return { name, url: imagesUrl[ind], position: body[positionKey] };
        }),
        description: { short: body.descriptionShort, long: body.descriptionLong },
        socialMedia: {
            facebook: body.facebook,
            instagrame: body.instagrame,
            twitter: body.twitter,
            spotify: body.spotify,
            youtube: body.youtube,
            whatsApp: body.whatsApp
        },
        events: body.events !== '' ? body.events.split(',') : [],
        cast: [],
        castPerson: body.castPerson,
        discography: [],
        products: body.products !== '' ? body.products.split(',') : [],
        videos: [],
        stream: [],
        isEvent: body.isEvent,
        isProduct: body.isProduct,
        isDiscography: body.isDiscography,
        isVideo: body.isVideo,
        isShift: body.isShift
    };
    for (const key in body) {
        const match = key.match(/^(castTitle|castText)(\d+)$/);
        const discMatch = key.match(/^(discTitle|discText|discUrl)_(\d+)(\/\d+)?$/);
        const videoMatch = key.match(/^video_(\d+)$/);
        const streamMatch = key.match(/^(streamVideo|streamText)_(\d+)$/)
        if (match) {
            const [, field, index] = match;
            if (!site.cast[index]) site.cast[index] = {};
            site.cast[index][field] = body[key];
        };
        if (discMatch) {
            const [, field, index, urlIndex] = discMatch;
            if (!site.discography[index]) site.discography[index] = { discTitle: '', discUrls: [], discText: '' };
            if (field === 'discTitle') site.discography[index].discTitle = body[key];
            else if (field === 'discText') site.discography[index].discText = body[key];
            else site.discography[index].discUrls.push(body[key]);
        };
        if (videoMatch) {
            const [, index] = videoMatch;
            site.videos[index] = body[key];
        };
        if (streamMatch) {
            const [, field, index] = streamMatch;
            if (!site.stream[index]) site.stream[index] = { url: '', description: '' };
            if (field === 'streamVideo') site.stream[index].url = body[key];
            else site.stream[index].description = body[key];
        };
    };
    const result = await sitesRepository.newSite(site);
    if (!result) throw new SitesNotFound('No se puede guardar los datos');
    return { status: 'success', result };
};

const getByUserId = async (uid) => {
    const result = await sitesRepository.getByUserId(uid);
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

const deleteCast = async (toDelete) => {
    const site = await sitesRepository.getById(toDelete._id);
    if (!site) throw new SitesNotFound('Sitio no encontrado');
    site.cast.splice(toDelete.index, 1);
    const images = site.images.filter(img => img.name !== `castImg${toDelete.index}`);
    const castImg = [];
    const imagesAll = [];
    images.forEach((img) => {
        if (img.name.startsWith('castImg')) castImg.push(img);
        else imagesAll.push(img)
    });
    castImg.forEach((img, ind) => img.name = `castImg${ind}`);
    site.images = [...imagesAll, castImg];
    const result = await sitesRepository.update(site);
    if (!result) throw new SitesNotFound('No se puede actualizar el sitio');
    return { status: 'success', result };
};

const updSite = async (images, imagesUrl, body) => {
    const title = await sitesRepository.getByTitle(body.title);
    const site = await sitesRepository.getById(body._id);
    if (title && body.title !== site.title) throw new SitesNotFound('Ya existe este titulo, prueba con otro');
    // let img;
    // if (images && imagesUrl) {
    //     img = images.map((img, ind) => {
    //         const name = img.originalname.split('_')[1];
    //         const positionKey = `position_${name}`;
    //         return { name, url: imagesUrl[ind], position: body[positionKey] };
    //     });
    // };

    const img = [
        {
          name: 'castNewImg0',
          url: 'https://res.cloudinary.com/dtzy75wyt/image/upload/v1731858391/sites/aborigenescachafaz/q359ca2ezbwdz3hf62vw.ppp',
          position: 'center'
        }
      ]
      
    

    const siteToUpdate = updSitesOption(img, body, site);
    const result = await sitesRepository.update(siteToUpdate);
    if (!result) throw new SitesNotFound('No se puede actualizar el sitio');
    return { status: 'success', result };
};

export { newSite, getByUserId, getByLinks, getRandom, getSites, updActive, deleteCast, updSite };