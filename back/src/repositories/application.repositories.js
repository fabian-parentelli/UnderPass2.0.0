import { appliManager } from '../dao/manager/index.manager.js';

export default class AppliRepository {

    newApplication = async (application) => {
        const result = await appliManager.newApplication(application);
        return result;
    };
    
    getAll = async (query, limit, page) => {
        const result = await appliManager.getAll(query, limit, page);
        return result;
    };
    
    getAppById = async (id) => {
        const result = await appliManager.getAppById(id);
        return result;
    };
    
    getByUserId = async (id) => {
        const result = await appliManager.getByUserId(id);
        return result;
    };
   
    update = async (application) => {
        const result = await appliManager.update(application);
        return result;
    };
    
    getUnderVew = async () => {
        const result = await appliManager.getUnderVew();
        return result;
    };
    
};