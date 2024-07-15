import { getListPrice } from './prices.service.js';
import priceListPdf from "../utils/pdf/priceList.pdf.js";

const priceList = async (country) => {
    const info = await getListPrice(country);
    const result = await priceListPdf(info.result);
    return result;
};

export { priceList };