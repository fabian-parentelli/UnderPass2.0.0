import { userManager, financialUserManager } from '../dao/manager/index.manager.js';

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

    getAllUsers = async (query) => {
        const result = await userManager.getAllUsers(query);
        return result;
    };

    getUserById = async (id) => {
        const result = await userManager.getUserById(id);
        return result;
    };

    paginates = async (query, options) => {
        const result = await userManager.paginates(query, options);
        return result;
    };

    searchUser = async (name) => {
        const result = await userManager.searchUser(name);
        return result;
    };

    userAmount = async (country) => {
        const result = await userManager.userAmount(country);
        return result;
    };

    // Financial Data....

    newFinancial = async (data) => {
        const result = await financialUserManager.newFinancial(data);
        return result;
    };

    getFinanceByUserId = async (id) => {
        const result = await financialUserManager.getFinanceByUserId(id);
        return result;
    };

    updateFinace = async (finance) => {
        const result = await financialUserManager.updateFinace(finance);
        return result;
    };

};