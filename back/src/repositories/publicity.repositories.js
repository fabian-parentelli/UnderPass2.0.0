import { publicityManager } from '../dao/manager/index.manager.js';

export default class PublicityRepository {

    newPublicity = async (publicity) => {
        const result = await publicityManager.newPublicity(publicity);
        return result;
    };

    getAll = async (query, limit, page) => {        
        const result = await publicityManager.getAll(query, limit, page);    
        if (query.active === 'false' || query.country || query.category || query.inPortal) return result;
        const today = new Date().setHours(0, 0, 0, 0);
        const updatePublicity = result.docs.filter(publicity => {
            const publicityEnd = new Date(publicity.end).setHours(0, 0, 0, 0);
            if (publicityEnd < today) {
                publicity.active = false;
                publicityManager.update(publicity);
                return false;
            };
            return true;
        });
        result.docs = updatePublicity;
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
};