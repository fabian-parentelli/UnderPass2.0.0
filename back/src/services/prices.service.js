import { priceRepository } from "../repositories/index.repositories.js";
import { PriceNotFound } from '../utils/custom-exceptions.utils.js';
import * as exchangeData from "../utils/exchangeApi.utils.js";

const newBannerPrice = async (price) => {
    const result = await priceRepository.newBannerPrice(price);
    if (!result) throw new PriceNotFound('No se puede guardar el video tutorial');
    return { status: 'success', result };
};

const getLastBanner = async (country) => {
    const result = await priceRepository.getLastBanner(country);
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

const getListPrice = async (country) => {
    const lastBanner = await priceRepository.getLastBanner(country);
    const result = { banner: lastBanner };
    return { status: 'success', result };
};

export { newBannerPrice, getLastBanner, exchange, getListPrice };