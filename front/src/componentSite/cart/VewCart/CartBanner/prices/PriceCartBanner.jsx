import { useEffect, useState } from "react";
import { useCartContext } from "../../../../../context/CartContext";

const PriceCartBanner = ({ item }) => {

    const { updatePrice } = useCartContext();
    const [sale, setSale] = useState(null);

    useEffect(() => {
        let data;
        if (item) {
            item.data.sales.forEach(sale => { if (item.quantity >= sale.days) data = sale.sale });
            const result = item.data.price - (item.data.price * data) / 100 || item.data.price;
            setSale(data);
            updatePrice(item._id, result);
        };
    }, [item.quantity]);

    return (
        <>
            <p>{item ? item.price : 0}</p>
            {sale && <p style={{ fontSize: '10px', color: 'green' }}>Descuento del % {sale}</p>}
        </>
    )
};

export default PriceCartBanner;