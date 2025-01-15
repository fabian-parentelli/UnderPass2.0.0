import { codeManager } from '../dao/manager/index.manager.js';

export default class CodeRepository {

    newCode = async (cash) => {
        const result = await codeManager.newCode(cash);
        return result;
    };

    getCodes = async (name) => {
        const result = await codeManager.getCodes(name);
        return result;
    };
    
    getCodeById = async (id) => {
        const result = await codeManager.getCodeById(id);
        return result;
    };
   
    update = async (code) => {
        const result = await codeManager.update(code);
        return result;
    };

};