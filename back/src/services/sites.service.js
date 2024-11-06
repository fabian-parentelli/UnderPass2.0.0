// import { ticketRepository } from "../repositories/index.repositories.js";
import { SitesNotFound } from '../utils/custom-exceptions.utils.js';

const newSite = async (images, imagesUrl, body) => {

    console.log('Camina *****************');

    const site = {
        title: body.title,
        category: body.category,
        subCategory: body.subCategory,
        userId: body.userId,
        link: body.folderName.split('/')[1],
        location: {
            city: body.city,
            province: body.province
        },
        images: images.map((img, ind) => {
            const name = img.originalname.split('_')[1];
            const positionKey = `position_${name}`;
            return {
                name,
                url: imagesUrl[ind],
                position: body[positionKey]
            };
        }),
        description: {
            short: body.descriptionShort,
            long: body.descriptionLong
        },
        socialMedia: {
            facebook: body.facebook,
            instagrame: body.instagrame,
            twitter: body.twitter,
            spotify: body.spotify,
            youtube: body.youtube,
            whatsApp: body.whatsApp
        },
        events: body.events.split(',')
    };

    console.log(site);
    console.log('************************');
    console.log('************************');
    console.log('************************');
    console.log(body);
};

export { newSite };