import { tokenManager } from '../dao/manager/index.manager.js';

export default class TokenRepository {

    getByUserId = async (id) => {
        const result = await tokenManager.getByUserId(id);
        return result;
    };
    
    newToken = async (token) => {
        const result = await tokenManager.newToken(token);
        return result;
    };
    
    update = async (token) => {
        const result = await tokenManager.update(token);
        return result;
    };
}