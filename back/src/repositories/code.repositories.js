import { codeManager } from '../dao/manager/index.manager.js';

export default class CodeRepository {

    newCode = async (cash) => {
        const result = await codeManager.newCode(cash);
        return result;
    };

    getCodes = async (query, page) => {
        const result = await codeManager.getCodes(query, page);
        return result;
    };

};