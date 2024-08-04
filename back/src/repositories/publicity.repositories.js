import { publicityManager } from '../dao/manager/index.manager.js';

export default class PublicityRepository {

    newPublicity = async (publicity) => {
        const result = await publicityManager.newPublicity(publicity);
        return result;
    };
}