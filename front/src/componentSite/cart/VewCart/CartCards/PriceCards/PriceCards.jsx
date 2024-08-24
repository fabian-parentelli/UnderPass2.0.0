import './priceCards.scss';
import { useCartContext } from '../../../../../context/CartContext';
import { useEffect, useState } from 'react';

const PriceCards = ({ item }) => {

    const { updatePrice } = useCartContext();
    const [sale, setSale] = useState(0);
    const [price, setPrice] = useState(null);

    useEffect(() => {
        let data = 0;
        let result;

        if (item && item.data && item.data.sales) {
            item.data.sales.forEach(sale => { if (item.quantity >= sale.days) data = sale.sale; });

            result = item.inPortal
                ? item.data.portal - (item.data.portal * data) / 100 || item.data.portal
                : item.data.price - (item.data.price * data) / 100 || item.data.price;

            if (price !== result) {
                setSale(data);
                setPrice(result);
                updatePrice(item._id, result);
            }
        }
    }, [item.quantity]); 
    
    return (
        <>
            <p>{price && price}</p>
            {sale > 0 && <p style={{ fontSize: '10px', color: 'green' }}>Descuento del % {sale}</p>}
        </>
    );
};

export default PriceCards;