import { eventManager } from '../dao/manager/index.manager.js';
import orderByLocation from '../utils/orderByLocation.utils.js';
import { OrderNotFound } from '../utils/custom-exceptions.utils.js';

export default class EventRepository {

    newEvent = async (event) => {
        const result = await eventManager.newEvent(event);
        return result;
    };

    getNotConfirm = async (query) => {
        const result = await eventManager.getNotConfirm(query);
        return result;
    };

    getEvent = async (query, limit, page, sort) => {
        const data = await eventManager.getEvent(query, limit, page);
        if (query.active === 'false') return data;
        const updateDocs = [];
        for (const event of data.docs) {
            if (new Date(event.startDate) < new Date().setHours(0, 0, 0, 0)) {
                console.log(event.startDate);
                event.active = false;
                await eventManager.update(event);
            } else updateDocs.push(event);
        };
        data.docs = updateDocs;
        data.totalDocs = data.docs.length;
        if (!sort || Object.keys(sort).length === 0) return data;
        const result = orderByLocation(data, sort);
        if (!result) throw new OrderNotFound('No se puede ordenar los documentos');
        return result;
    };

    getById = async (id) => {
        const result = await eventManager.getById(id);
        return result;
    };

    update = async (event) => {
        const result = await eventManager.update(event);
        return result;
    };

};