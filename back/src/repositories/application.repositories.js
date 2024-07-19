import { appliManager } from '../dao/manager/index.manager.js';

export default class AppliRepository {

    // Banners

    appliBanner = async (application) => {
        const result = await appliManager.appliBanner(application);
        return result;
    };

};