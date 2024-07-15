import './bannersPrice.scss';
import React, { useEffect, useState } from 'react';
import { newPriceApi } from '../../../../../helpers/prices/banners/newPrice.api.js';
import { lastBannerPriceApi } from '../../../../../helpers/prices/banners/lastBannerPrice.api.js';
import LineCharts from '../../../../../component/utils/chart/LineCharts.jsx';
import GraphBanner from './GraphBanner.jsx';

const BannersPrice = ({ country, setLoading, setMessage, setOpen }) => {

    const [formData, setFormData] = useState({
        name: 'banner',
        country: country,
        price: '',
        sales: [{ days: '', sale: '' }, { days: '', sale: '' }, { days: '', sale: '' }]
    });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await lastBannerPriceApi(country);
            if (response && response.status === 'success') {
                const data = response.result;
                setFormData({
                    name: data.name || 'banner',
                    country: data.country || country,
                    price: data.price || '',
                    sales: data.sales.length ? data.sales : [{ days: '', sale: '' }, { days: '', sale: '' }, { days: '', sale: '' }]
                });
            };
            setLoading(false);
        }; fetchData();
    }, [country]);

    const handleChange = (e, index, field) => {
        const value = e.target.value;
        if (field === 'price') {
            setFormData({ ...formData, price: value });
        } else {
            const newSales = formData.sales.map((sale, i) =>
                i === index ? { ...sale, [field]: value } : sale);
            setFormData({ ...formData, sales: newSales });
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await newPriceApi(formData);
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
        <>
            <form className='bannersPrice' onSubmit={handleSubmit}>
                <h4>Banners</h4>
                <div>
                    <label>Banners x día $</label>
                    <input
                        type="text"
                        value={formData.price}
                        onChange={(e) => handleChange(e, null, 'price')}
                    />
                </div>

                {formData.sales.map((sale, index) => (
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
            <GraphBanner country={country} />
        </>
    );
};

export default BannersPrice;