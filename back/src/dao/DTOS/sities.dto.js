import { eventRepository } from "../../repositories/index.repositories.js";

const thereIsSmoething = async (site) => {
    if (site.isEvent) site = await getEVents(site);
    return site;
};

async function getEVents(site) {
    const events = [];
    for (const eventId of site.events) {
        const event = await eventRepository.getById(eventId);
        const { _id, title, location, photo, startHour, startDate, minors, category } = event;
        events.push({ _id, title, location, photo, startHour, startDate, minors, category })
    };
    site.events = events;
    return site;
}

export { thereIsSmoething };