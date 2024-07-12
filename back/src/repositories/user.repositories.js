import { userManager } from '../dao/manager/index.manager.js';

export default class UserRepository {

    register = async (user) => {
        const result = await userManager.register(user);
        const newResult = { ...result._doc };
        delete newResult.password
        return newResult;
    };

    getByEmail = async (email) => {
        const result = await userManager.getByEmail(email);
        return result;
    };

    update = async (user) => {
        const result = await userManager.update(user);
        return result;
    };

    getByIdPass = async (id) => {
        const result = await userManager.getByIdPass(id);
        return result;
    };

};