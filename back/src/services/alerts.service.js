import {
    userRepository, productRepository, alertsRepository,
    publicityRepository
} from "../repositories/index.repositories.js";
import { AllertsNotFound } from '../utils/custom-exceptions.utils.js';

const newAlert = async (alert) => {
    const result = await alertsRepository.newAlert(alert);
    if (!result) throw new AllertsNotFound('No se puede guardar la alerta');
};

const getAll = async (user) => {
    if (user.role === 'admin') user._id = '668d9529cf8bde76a0dc3adb';
    const result = {};
    const alerts = await alertsRepository.getAlerts({ userId: user._id, active: true });
    if (!alerts) return { status: 'success', result: '' };
    const alertTypes = new Set();
    alerts.forEach(alert => alertTypes.add(alert.type));
    alertTypes.forEach((type) => {
        result[type] = {
            count: alerts.filter(alert => alert.type === type).length,
            data: alerts.filter(alert => alert.type === type)
        };
    });
    return { status: 'success', result };
};

const amount = async () => {
    const result = {};
    result.ar = {
        users: await userRepository.userAmount('AR') || 0,
        products: await productRepository.productAmount('AR') || 0,
        publicity: await publicityRepository.getAmountInPortal({ country: 'AR', active: true }) || 0
    };
    result.uy = {
        users: await userRepository.userAmount('UY') || 0,
        products: await productRepository.productAmount('UY') || 0,
        publicity: await publicityRepository.getAmountInPortal({ country: 'UY', active: true }) || 0

    };    
    return { status: 'success', result };
};

const getByUser = async (limit, page, user) => {
    const result = await alertsRepository.getPaginate(limit, page, { userId: user });
    if (!result) throw new AllertsNotFound('No se encuentran alertas');
    return { status: 'success', result };
};

const updActive = async (ids) => {
    const results = await Promise.all(
        Object.keys(ids).map(async (key) => {
            const alert = await alertsRepository.getById(ids[key]);
            if (!alert) throw new AllertsNotFound(`no se encuentra la alerta ${ids[key]}`);
            alert.active = false;
            return await alertsRepository.update(alert);
        })
    );
    return { status: 'success', results };
};

const updateOneActive = async (id) => {
    const alert = await alertsRepository.getByEventId(id);
    if (alert) {
        alert.active = false;
        await alertsRepository.update(alert);
    };
};

export { getAll, amount, newAlert, updActive, getByUser, updateOneActive };