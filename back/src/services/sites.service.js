import { sitesRepository } from "../repositories/index.repositories.js";
import { SitesNotFound } from '../utils/custom-exceptions.utils.js';

const newSite = async (images, imagesUrl, body) => {

    const nameIs = await sitesRepository.getByTitle(body.title);
    if (nameIs) throw new SitesNotFound('Este nombre ya está en uso');

    const site = {
        title: body.title,
        category: body.category,
        subCategory: body.subCategory,
        userId: body.userId,
        link: body.folderName.split('/')[1],
        location: { city: body.city, province: body.province },
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
        events: body.events !== '' ? body.events.split(',') : undefined,
        cast: [],
        castPerson: body.castPerson,
        discography: [],
        events: body.products !== '' ? body.products.split(',') : undefined,
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

export { newSite, getByUserId, getByLinks };