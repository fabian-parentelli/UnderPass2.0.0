import {
    userRepository, productRepository, alertsRepository,
    publicityRepository, appliRepository
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
    result.count = alerts.length;
    result.alerts = alerts;
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

const updActive = async (id) => {
    const alert = await alertsRepository.getById(id);
    if (!alert) throw new AllertsNotFound(`no se encuentra la alerta`);
    alert.active = false;
    const result = await alertsRepository.update(alert);
    return { status: 'success', result };
};

const updateOneActive = async (id) => {
    const alert = await alertsRepository.getByEventId(id);
    if (alert) {
        alert.active = false;
        await alertsRepository.update(alert);
        const event = await appliRepository.getAppById(alert.eventId);
        const userAlert = {
            eventId: alert.eventId,
            userId: event.userId,
            type: 'weHaveSeenYourRequest',
        };
        await alertsRepository.newAlert(userAlert);
    };
};

const deleteAlert = async (id) => {
    const result = await alertsRepository.deleteAlert(id);
    if (!result) throw new AllertsNotFound(`No se puede eliminar la alerta`);
    return { status: 'success', result };
};

const getAlertMax = async (days) => {
    const total = await alertsRepository.alertAmount() || 0;
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - +days);
    const defeated = await alertsRepository.getAlertQuery({ date: { $lt: cutoffDate } }) || [];
    return { total, defeated };
};

const deleteAll = async ({ ids }) => {
    const result = await alertsRepository.deleteMany({ _id: { $in: ids } })
    if (!result) throw new AllertsNotFound(`No se pueden eliminar las alertas`);
    return { status: 'success', result };
};

export {
    getAll, amount, newAlert, updActive, getByUser, updateOneActive, deleteAlert, getAlertMax, deleteAll
};