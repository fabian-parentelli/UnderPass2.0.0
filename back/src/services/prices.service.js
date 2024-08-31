import { priceRepository } from "../repositories/index.repositories.js";
import { PriceNotFound } from '../utils/custom-exceptions.utils.js';
import * as exchangeData from "../utils/exchangeApi.utils.js";

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

const getAllPrice = async () => {
    const result = await priceRepository.getAllPrice();
    if (!result) throw new PriceNotFound('No se puede obtener la lista de precios');
    return { status: 'success', result };
};

export { newPrice, getLastPrice, exchange, getAllPrice, newDataPass, getDataPass, updDataPass };