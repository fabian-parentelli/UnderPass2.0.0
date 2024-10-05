import { publicityManager } from '../dao/manager/index.manager.js';
import { newAlert } from '../services/alerts.service.js';

export default class PublicityRepository {

    newPublicity = async (publicity) => {
        const result = await publicityManager.newPublicity(publicity);
        await newAlert({ eventId: result._id, userId: result.application.userId, type: 'publicityOn' });
        return result;
    };

    getByUserId = async (id, active) => {
        const result = await publicityManager.getByUserId(id, active);
        return result;
    };

    getAmountInPortal = async (query) => {
        const result = await publicityManager.getAmountInPortal(query);
        return result;
    };

    getAll = async (query, limit, page) => {
        const result = await publicityManager.getAll(query, limit, page);  
        if(query.active === 'false') return result;
        const today = new Date().setHours(0, 0, 0, 0);
        const updatedDocs = [];
        for (let i = 0; i < result.docs.length; i++) {
            const publicity = result.docs[i];
            if (!publicity.end) updatedDocs.push(publicity);
            else {
                const publicityEnd = new Date(publicity.end).setHours(0, 0, 0, 0);                
                if (publicityEnd > today) updatedDocs.push(publicity);
                else {
                    if (publicity.active === true) {
                        await newAlert({ eventId: publicity._id, userId: publicity.application.userId, type: 'publicityOff' });
                        publicity.active = false;
                        publicity.inPortal = false;
                        await publicityManager.update(publicity);
                        continue;
                    };
                };
            };
        };
        result.docs = updatedDocs;
        return result;
    };

    getById = async (id) => {
        const result = await publicityManager.getById(id);
        return result;
    };

    update = async (publicity) => {
        const result = await publicityManager.update(publicity);
        return result;
    };

    getCards = async (type, country, { inPortal }, { limit }) => {
        const result = await publicityManager.getCards(type, country, inPortal, limit);
        return result;
    };

    getUserVew = async (id) => {
        const result = await publicityManager.getUserVew(id);
        return result;
    };
};