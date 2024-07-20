import './price.scss';
import { useEffect, useState } from 'react';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import { lastBannerPriceApi } from '../../../../helpers/prices/banners/lastBannerPrice.api';

const Price = ({ country, handleChange, values, setDataPrice }) => {

    const [price, setPrice] = useState(null);
    const [sale, setSale] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await lastBannerPriceApi(country);
            if (response.status === 'success') {
                setPrice(response.result);
                setDataPrice(response.result);
            };
        }; fetchData();
    }, []);

    useEffect(() => {
        if (price) {
            let data = 0;
            price.sales.forEach((sale) => { if (values.days >= sale.days) data = sale.sale });
            setSale(data);
        };
    }, [values.days]);

    return (
        <div className='price'>

            <div>
                <p>Mostrar</p>

                <input
                    style={{ width: '60px' }}
                    type="text"
                    name='days'
                    onChange={handleChange}
                    required
                />

                <p>días</p>
            </div>

            <div>
                {price &&
                    <>
                        <p>Costo por día ${price.price - ((price.price * sale) / 100)}</p>
                        <p>total: {(price.price - ((price.price * sale) / 100)) * values.days}</p>
                    </>
                }
            </div>

            <div className='listIcon'>
                <RequestQuoteIcon />
                <div className='listIconPrice'>
                    <p>Precios y descuentos</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Lista</th>
                                {price && price.sales.map((pri, index) => (
                                    <th key={index}>{pri.days} dias</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${price && price.price}</td>
                                {price && price.sales.map((pri, index) => (
                                    <td key={index}>% {pri.sale}</td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Price;