const newSiteOptions = (images, imagesUrl, sit, site) => {
    if (sit.post === 'portal') site = isPortal(images, imagesUrl, sit, site);
    if (sit.post === 'events') site = isEvent(sit, site);
    if (sit.post === 'description') site = isDescription(images, imagesUrl, sit, site);
    if (sit.post === 'socialMedia') site = isSocialMedia(sit, site);
    if (sit.post === 'cast' && sit.castPerson) site = isCastOnly(imagesUrl, sit, site);
    if (sit.post === 'cast' && !sit.castPerson) site = isCast(images, imagesUrl, sit, site);
    if (sit.post === 'discography') site = isDiscography(images, imagesUrl, sit, site);
    if (sit.post === 'products') site = isProduct(sit, site);
    if (sit.post === 'galery') site = isGalery(images, imagesUrl, sit, site);
    if (sit.post === 'videos') site = isVideo(sit, site);
    if (sit.post === 'shifts') site = isShift(sit, site);
    return site;
};

export { newSiteOptions };

function isPortal(images, imagesUrl, sit, site) {

    const folderName = formatText(sit.title);
    const imgPortal = {};
    if (imagesUrl.length > 0 && images.length > 0) {
        imagesUrl.forEach((img, ind) => {
            const imageName = images[ind].originalname;
            imgPortal[imageName] = {
                url: img,
                position: sit[`position_${imageName}`] || undefined
            };
        });
        site = { ...site, ...sit, imgPortal: { ...site.imgPortal, ...imgPortal } };
    } else {
        site = { ...site, ...sit };
        if (sit.position_banner || sit.position_logo && imagesUrl.length == 0 && images.length == 0) {
            if (site.imgPortal.banner) site.imgPortal.banner.position = sit.position_banner;
            if (site.imgPortal.logo) site.imgPortal.logo.position = sit.position_logo;
        };
    };
    site.link = folderName;
    return site;
};

function isEvent(sit, site) {
    site = { ...site, ...sit };
    if (!site.isEvent) site.events = [];
    return site;
};

function isDescription(images, imagesUrl, sit, site) {
    if (site.description) {
        site = { ...site, ...sit };
    } else {
        site.description = {
            short: sit.description.short ? sit.description.short : undefined,
            long: sit.description.long ? sit.description.long : undefined,
        };
    };
    if (imagesUrl.length > 0 && images.length > 0) {
        site.description.img = {
            url: imagesUrl[0],
            name: images[0].originalname,
            position: sit[`position_${images[0].originalname}`] || undefined
        };
    };
    if (sit.position_photoDescription && imagesUrl.length == 0 && images.length == 0) {
        site.description.img.position = sit.position_photoDescription;
    };
    return site;
};

function isSocialMedia(sit, site) {
    site = { ...site, ...sit };
    return site;
};

function isCast(images, imagesUrl, sit, site) {
    site = { ...site, ...sit };
    if (imagesUrl.length > 0 && images.length > 0) {
        const bothImages = imagesUrl.map((img, ind) => {
            return {
                url: img,
                name: images[ind].originalname,
                position: sit[`position_${images[ind].originalname}`] || undefined
            }
        });
        bothImages.forEach((img) => {
            const index = site.cast.findIndex(cas => cas.title == img.name);
            site.cast[index].img = img;
        });
    };
    const positionKey = Object.keys(sit).filter(key => key.startsWith('position_'));
    if (positionKey.length > 0 && imagesUrl.length == 0 && images.length == 0) {
        positionKey.forEach((pos) => {
            const namePosition = pos.split('_')[1];
            const index = site.cast.findIndex(cas => cas.title === namePosition);
            site.cast[index].img.position = sit[pos];
        });
    };
    return site;
};

function isCastOnly(imagesUrl, sit, site) {    
    site = { ...site, ...sit };
    if (imagesUrl.length > 0) {
        site.castPerson.img = {
            url: imagesUrl[0],
            position: sit[`position_castImg`] || undefined
        };
    };    
    return site;
};

function isDiscography(images, imagesUrl, sit, site) {
    site = { ...site, ...sit };
    if (images.length > 0 && imagesUrl.length > 0) {
        const bothImages = imagesUrl.map((img, ind) => {
            return {
                url: img,
                name: images[ind].originalname,
                position: sit[`position_${images[ind].originalname}`] || undefined
            };
        });
        bothImages.forEach((img) => {
            const index = site.discography.findIndex(dis => dis.title === img.name);
            site.discography[index].img = img;
        });
    };
    const positionKey = Object.keys(sit).filter(key => key.startsWith('position_'));
    if (positionKey.length > 0 && imagesUrl.length == 0 && images.length == 0) {
        positionKey.forEach((pos) => {
            const namePosition = pos.split('_')[1];
            const index = site.discography.findIndex(cas => cas.title === namePosition);
            site.discography[index].img.position = sit[pos];
        });
    };
    return site;
};

function isProduct(sit, site) {
    site = { ...site, ...sit };
    if (!site.isProduct) site.products = [];
    return site;
};

function isGalery(images, imagesUrl, sit, site) {
    site = { ...site, ...sit };
    if (images.length > 0 && imagesUrl.length > 0) {
        const bothImages = imagesUrl.map((img, ind) => {
            return {
                url: img,
                name: images[ind].originalname,
                position: sit[`position_${images[ind].originalname}`] || undefined
            };
        });
        bothImages.forEach((sitGal) => {
            const index = site.galery.findIndex(sit => sit.name === sitGal.name);
            if (index !== -1) site.galery[index] = sitGal;
            else site.galery.push(sitGal)
        });
    };
    const positionKey = Object.keys(sit).filter(key => key.startsWith('position_'));
    if (positionKey.length > 0 && imagesUrl.length == 0 && images.length == 0) {
        positionKey.forEach((pos) => {
            const namePosition = pos.split('_')[1];
            const index = site.galery.findIndex(cas => cas.name === namePosition);
            site.galery[index].position = sit[pos];
        });
    };
    return site;
};

function isVideo(sit, site) {
    site = { ...site, ...sit };
    if (!site.isVideo) site.videos = [];
    return site;
};

function isShift(sit, site) {
    site = { ...site, ...sit };
    return site;
};

function formatText(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "");
};