import { appliRepository } from "../repositories/index.repositories.js";
import { AllertsNotFound } from '../utils/custom-exceptions.utils.js';

const getAll = async (user) => {
    const result = {};
    if (user.role !== 'user') {
        result.applications = await appliRepository.getUnderVew() || '';
    };
    return { status: 'success', result };
};

export { getAll };