import { priceRepository } from "../repositories/index.repositories.js";
import { PriceNotFound } from '../utils/custom-exceptions.utils.js';
import * as exchangeData from "../utils/exchangeApi.utils.js";
import * as alertsServices from '../services/alerts.service.js';
import * as shiftServices from '../services/shif.service.js';

const newDataPass = async (data) => {
    const result = await priceRepository.newDataPass(data);
    if (!result) throw new PriceNotFound('No se pueden guardar los datos');
    return { status: 'success', result };
};

const newPrice = async (price) => {
    price.sales = price.sales.filter(sale => sale.days && sale.sale);
    const result = await priceRepository.newPrice(price);
    if (!result) throw new PriceNotFound('No se puede guardar el nuevo precio');
    return { status: 'success', result };
};

const getLastPrice = async (country, name) => {
    const result = await priceRepository.getLastPrice(country, name);
    if (!result) return { status: 'notFound', result: {} };
    return { status: 'success', result };
};

const exchange = async () => {
    const result = {
        uy: await exchangeData.averageUy(),
        ar: await exchangeData.averageAr()
    };
    if (!result) throw new PriceNotFound('No se encuentran las actualizaciones');
    return { status: 'success', result };
};

const getMaxCounterByType = async (type) => {
    const result = await priceRepository.getMaxCounterByType(type);
    if (!result) throw new PriceNotFound(`Error al obtener datos de ${type}`);
    if (type === 'maxAlert') result.countData = await alertsServices.getAlertMax(result.maxCount);
    if (type === 'maxPostp') result.countData = await shiftServices.getPostponeMax(result.maxCount);
    if (type === 'maxShift') result.countData = await shiftServices.getShiftMax(result.maxCount);
    return { status: 'success', result };
};

const getDataPass = async (country) => {
    const result = await priceRepository.getDataPass(country);
    if (!result) return { status: 'error', result };
    return { status: 'success', result };
};

const updDataPass = async (data) => {
    const dataPass = await priceRepository.getDataPass(data.country);
    const newData = { ...dataPass, ...data };
    const result = await priceRepository.updDataPass(newData);
    if (!result) throw new PriceNotFound('No se puede actualizar los datos');
    return { status: 'success', result };
};

const updMaxCount = async (data) => {
    const maxDataCount = await priceRepository.getMaxCounterByType(data.type);
    if (!maxDataCount) throw new PriceNotFound(`Error al obtener datos de ${data.type}`);
    maxDataCount.maxCount = data.maxCount;
    const result = await priceRepository.updDataPass(maxDataCount);
    if (!result) throw new PriceNotFound('No se puede actualizar los datos');
    return { status: 'success', result };
};

const getAllPrice = async () => {
    const result = await priceRepository.getAllPrice();
    if (!result) throw new PriceNotFound('No se puede obtener la lista de precios');
    return { status: 'success', result };
};

export {
    newPrice, getLastPrice, exchange, getAllPrice, newDataPass, getDataPass, updDataPass, updMaxCount,
    getMaxCounterByType
};