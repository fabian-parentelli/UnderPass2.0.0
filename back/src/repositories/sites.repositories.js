import { sitesManager } from '../dao/manager/index.manager.js';
import { thereIsSmoething } from '../dao/DTOS/sities.dto.js';

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
        const preVew = await sitesManager.getByLinks(link);
        const result = await thereIsSmoething(preVew);
        return result;
    };

};