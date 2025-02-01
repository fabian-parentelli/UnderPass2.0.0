import { getLastPriceApi } from '../../helpers/prices/getLastPrice.api.js';

const getPrices_shUtils = async (query, config) => {

    const data = await getLastPriceApi({ country: localStorage.getItem('country'), name: 'shifts' });
    const percent = data?.result?.price || 10; 
    
    let price;

    if (query.sections) {
        const room = config.roomsData.find(r => r.name.toLowerCase() === query.room.toLowerCase());
        const section = room.sections.find(sect => sect.title.toLowerCase() === query.sections.toLowerCase());
        price = section.price;
    };

    const prePrice = price || config.price;
    const result = prePrice + (prePrice * percent / 100);

    return result;
};

export { getPrices_shUtils };