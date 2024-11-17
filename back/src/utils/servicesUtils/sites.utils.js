const updSitesOption = (img, body, site) => {
    if (body.type === 'portal') site = isPortal(img, body, site);

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

function isImages(img, images) {
    img.forEach((im) => {
        const index = images.findIndex(ind => ind.name === im.name);
        if (index !== -1) images[index] = { ...images[index], ...im };
    });
    return images;
};