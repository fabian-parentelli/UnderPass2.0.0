const updSitesOption = (img, body, site) => {
    if (body.type === 'portal') site = isPortal(img, body, site);
    if (body.type === 'events') site = isEvents(body, site);
    if (body.type === 'description') site = isDescription(img, body, site);
    if (body.type === 'socialMedia') site = isSocialMedia(body, site);
    if (body.type === 'castAll') site = isCastAll(img, body, site);

    return site;
};

export { updSitesOption };

function isPortal(img, body, site) {
    if (img) site.images = isImages(img, site.images);
    site.title = body.title;
    site.subCategory = body.subcategory;
    site.category = body.category;
    site.location.city = body.city;
    site.location.province = body.province;
    return site;
};

function isEvents(body, site) {
    if (body.isEvent === 'false') {
        site.isEvent = false;
        site.events = [];
    } else {
        site.isEvent = body.events !== '' ? true : false;
        site.events = body.events !== '' ? body.events.split(',') : [];
    };
    return site;
};

function isDescription(img, body, site) {
    if (img) site.images = isImages(img, site.images);
    site.description.short = body.descriptionShort;
    site.description.long = body.descriptionLong;
    return site;
};

function isSocialMedia(body, site) {
    if (body.facebook !== '') site.socialMedia.facebook = body.facebook;
    if (body.instagrame !== '') site.socialMedia.instagrame = body.instagrame;
    if (body.twitter !== '') site.socialMedia.twitter = body.twitter;
    if (body.spotify !== '') site.socialMedia.spotify = body.spotify;
    if (body.youtube !== '') site.socialMedia.youtube = body.youtube;
    if (body.whatsApp !== '') site.socialMedia.whatsApp = body.whatsApp;
    return site;
};

function isCastAll(img, body, site) {
    if (img) site.images = isImages(img, site.images);
    if (site.cast) site.cast = JSON.parse(body.cast);
    const castArray = [];
    for (const key in body) {
        const match = key.match(/^(castNewTitle|castNewText)_(\d+)$/);
        if (match) {
            const [, field, index] = match;
            if (!castArray[index]) castArray[index] = {};
            if (field === 'castNewTitle') castArray[index].castTitle = body[key];
            else if (field === 'castNewText') castArray[index].castText = body[key];
        };
    };
    site.cast = [...site.cast, castArray];
    // return site;
};

function isImages(img, images) {
    img.forEach((im) => {
        const index = images.findIndex(ind => ind.name === im.name);
        if (index !== -1) images[index] = { ...images[index], ...im };
        else {
            console.log(im);
            // Estoy aca tengo que ver como hago para 
            // agregar la imagen a la base de datos 
            // pero de forma ordenada
        }
    });
    return images;
};