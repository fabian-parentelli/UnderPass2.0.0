import './newPrice.scss';
import { useEffect, useState } from 'react';
import { newPriceApi } from '../../../../../helpers/prices/newPrice.api.js';
import { getLastPriceApi } from '../../../../../helpers/prices/getLastPrice.api.js';

const NewPrice = ({ country, setLoading, setMessage, setOpen, type }) => {

    const [values, setValues] = useState({
        name: '', country: country, price: '',
        sales: [{ days: '', sale: '' }, { days: '', sale: '' }, { days: '', sale: '' }]
    });

    useEffect(() => { setValues({ ...values, name: type }) }, [type])

    useEffect(() => {
        const fetchData = async () => {
            const response = await getLastPriceApi({ country: country, name: type });
            if (response && response.status === 'success') {
                const data = response.result;
                setValues({
                    name: type,
                    country: data.country || country,
                    price: data.price || '',
                    sales: data.sales.length ? data.sales : [{ days: '', sale: '' }, { days: '', sale: '' }, { days: '', sale: '' }]
                });
            } else setValues({
                name: type, country: country, price: '',
                sales: [{ days: '', sale: '' }, { days: '', sale: '' }, { days: '', sale: '' }]
            });
        }; fetchData();
    }, [country, type]);

    const handleChange = (e, index, field) => {
        const value = e.target.value;
        if (field === 'price') {
            setValues({ ...values, price: value });
        } else {
            const newSales = values.sales.map((sale, i) =>
                i === index ? { ...sale, [field]: value } : sale);
            setValues({ ...values, sales: newSales });
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await newPriceApi(values);
        if (response.status === 'success') {
            setLoading(false);
            setOpen(true);
            setMessage({ status: 'success', mess: 'Precio Actualizado' });
            setTimeout(() => { setOpen(false); }, 2000);
        } else {
            setMessage({ status: 'error', mess: response });
            setTimeout(() => { setOpen(false); }, 2000);
        };        
    };

    return (
        <div className='newPrice'>
            <form className='bannersPrice' onSubmit={handleSubmit}>
                <p>EL precio por publicidad es por dia y en moneda local.<br />El precio de eventos, productos y turnos es porcentaje del mismo.</p>
                <div>

                    <label>Precio</label>
                    <input
                        type="text"
                        value={values.price}
                        onChange={(e) => handleChange(e, null, 'price')}
                    />
                </div>

                {(type === 'banners' || type === 'separator' || type === 'cards') && values.sales.map((sale, index) => (
                    <div key={index}>
                        <div className='divSale'>
                            <label>Descuento más de</label>
                            <input
                                type="text"
                                value={sale.days}
                                onChange={(e) => handleChange(e, index, 'days')}
                            />
                            <p>días</p>
                        </div>
                        <div className='divSale'>
                            <p>%</p>
                            <input
                                type="text"
                                style={{ width: '100%' }}
                                value={sale.sale}
                                onChange={(e) => handleChange(e, index, 'sale')}
                            />
                        </div>
                    </div>
                ))}
                <button className='btn btnC'>Actualizar</button>
            </form>
        </div>
    );
};

export default NewPrice;