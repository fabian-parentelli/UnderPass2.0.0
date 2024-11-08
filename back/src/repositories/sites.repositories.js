import { sitesManager } from '../dao/manager/index.manager.js';

export default class SitesRepository {

    newSite = async (site) => {
        const result = await sitesManager.newSite(site);
        return result;
    };
    
    getByTitle = async (title) => {
        const result = await sitesManager.getByTitle(title);
        return result;
    };
    
    getByUserId = async (uid) => {
        const result = await sitesManager.getByUserId(uid);
        return result;
    };
    
    getByLinks = async (link) => {
        const result = await sitesManager.getByLinks(link);
        return result;
    };

};