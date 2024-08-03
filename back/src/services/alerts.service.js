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
        products: await productRepository.productAmount('AR') || 0
    };
    result.uy = {
        users: await userRepository.userAmount('UY') || 0,
        products: await productRepository.productAmount('UY') || 0
    };
    return { status: 'success', result };
};

export { getAll, amount };