import { useEffect, useState } from "react";
import { useCartContext } from "../../../../context/CartContext";

const PriceAddToPortal = ({ item }) => {

    const { updatePrice } = useCartContext();
    const [sale, setSale] = useState(0);
    const [prices, setPrices] = useState(item.data.portal - item.data.price || 0);

    useEffect(() => {
        let data = 0;
        let result;
        if (item && item.data && item.data.sales) {
            item.data.sales.forEach(sale => { if (item.quantity >= sale.days) data = sale.sale });
            result = (item.data.portal - (item.data.portal * data / 100) - (item.data.price - (item.data.price * data / 100)))
        };
        setSale(data);
        setPrices(result);
        updatePrice(item._id, result);
    }, [item.quantity]);

    return (
        <>
            <p>{item ? item.price : 0}</p>
            {sale > 0 && <p style={{ fontSize: '10px', color: 'green' }}>Descuento del % {sale}</p>}
        </>
    );
};

export default PriceAddToPortal;