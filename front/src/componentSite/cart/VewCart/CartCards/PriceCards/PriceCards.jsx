import './priceCards.scss';
import { useCartContext } from '../../../../../context/CartContext';
import { useEffect, useState } from 'react';

const PriceCards = ({ item }) => {

    const { updatePrice } = useCartContext();
    const [sale, setSale] = useState(null);

    useEffect(() => {
        let data;
        let result;
        if (item && item.data && item.data.sales) {
            item.data.sales.forEach(sale => { if (item.quantity >= sale.days) data = sale.sale });
            item.inPortal
                ? result = item.data.portal - (item.data.portal * data) / 100 || item.data.portal
                : result = item.data.price - (item.data.price * data) / 100 || item.data.price;
            setSale(data);
            updatePrice(item._id, result);
        };
    }, [item.quantity]);

    return (
        <>
            <p>{item ? item.price : 0}</p>
            {sale && <p style={{ fontSize: '10px', color: 'green' }}>Descuento del % {sale}</p>}
        </>
    );
};

export default PriceCards;