import { priceRepository } from "../repositories/index.repositories.js";

const bannerPrices = async (country) => {
    const banners = await priceRepository.getAllBanner(country);
    const data = { labels: [], series: [{ data: [] }] };
    banners.forEach((bann) => {
        const fecha = new Date(bann.date);
        const dia = ("0" + fecha.getDate()).slice(-2);
        const mes = ("0" + (fecha.getMonth() + 1)).slice(-2);
        const fechaNumerica = parseInt(mes + dia, 10);
        data.labels.push(fechaNumerica);
        data.series[0].data.push(bann.price);
    });
    return { status: 'success', data };
};

export { bannerPrices };