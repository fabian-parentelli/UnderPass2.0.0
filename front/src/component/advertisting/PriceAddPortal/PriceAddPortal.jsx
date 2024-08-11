import './priceAddToPortal.scss';
import { useEffect, useState } from 'react';
import { getLastPriceApi } from '../../../helpers/prices/getLastPrice.api.js';

const PriceAddToPortal = ({ data, values, setValues }) => {

    const [price, setPrice] = useState(null);
    const [sale, setSale] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getLastPriceApi({ country: data.country, name: data.type });
            if (response.status === 'success') setPrice(response.result);
            else console.log(response);
        }; fetchData();
    }, [data.country, data.type]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (value <= Math.ceil((new Date(data.end) - new Date()) / (1000 * 60 * 60 * 24)) && value >= 0) setValues(prevValues => ({ ...prevValues, [name]: value }));
    };

    useEffect(() => {
        if (price) {
            let data = 0;
            price.sales.forEach((sale) => { if (values.days >= sale.days) data = sale.sale });
            setSale(data);
        };
    }, [values]);

    return (
        <div className='priceAddToPortal'>
            <div className='priceAddToPortalInput'>
                <p>Mostrar</p>

                <input
                    style={{ width: '60px' }}
                    type="number"
                    name='days'
                    onChange={handleChange}
                    value={values.days}
                    max={Math.ceil((new Date(data.end) - new Date()) / (1000 * 60 * 60 * 24))}
                    min="0"
                    required
                />

                <p>días</p>
            </div>

            <div>
                {price &&
                    <>
                        <p>Costo por día ${(price.portal - (price.portal * sale / 100) - (price.price - (price.price * sale / 100)))}</p>
                        <p>total: {(price.portal - (price.portal * sale / 100) - (price.price - (price.price * sale / 100))) * values.days || 0}</p>
                    </>
                }
            </div>
        </div>
    );
};

export default PriceAddToPortal;