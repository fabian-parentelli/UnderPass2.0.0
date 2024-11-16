import { eventRepository, productRepository } from "../../repositories/index.repositories.js";

const thereIsSmoething = async (site) => {
    if (site.isEvent) site = await getEVents(site);
    if (site.isProduct) site = await getProducts(site);
    return site;
};

async function getEVents(site) {
    const events = [];
    for (const eventId of site.events) {
        const event = await eventRepository.getById(eventId);
        if (event.active) {
            const { _id, title, location, photo, startHour, startDate, minors, category } = event;
            events.push({ _id, title, location, photo, startHour, startDate, minors, category })
        };
    };
    site.events = events;
    return site;
};

async function getProducts(site) {
    const products = []
    for (const prod of site.products) {
        const product = await productRepository.getProdById(prod);
        const { _id, name, description, price, img } = product;
        products.push({ _id, name, description, price, img });
    };
    site.products = products;
    return site;
};

export { thereIsSmoething };