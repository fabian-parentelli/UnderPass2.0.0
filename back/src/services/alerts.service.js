import { appliRepository, userRepository, productRepository } from "../repositories/index.repositories.js";
import { AllertsNotFound } from '../utils/custom-exceptions.utils.js';

const getAll = async (user) => {
    const result = {};
    if (user.role !== 'user') {
        result.applications = await appliRepository.getUnderVew() || '';
    };
    return { status: 'success', result };
};

const amount = async () => {
    const result = {};
    result.ar = {
        users: await userRepository.userAmount('AR') || 0,
        products: await productRepository.productAmount('AR')
    };
    result.uy = {
        users: await userRepository.userAmount('UY') || 0,
        products: await productRepository.productAmount('AY')
    };
    return { status: 'success', result };
};

export { getAll, amount };