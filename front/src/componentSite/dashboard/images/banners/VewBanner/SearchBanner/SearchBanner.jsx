import './searchBanner.scss';
import { useState } from 'react';
import { getAllBannersApi } from '../../../../../../helpers/images/banners/getAllBanners.api.js';
import CountrySelected from '../../../../../../component/dashboard/banner/CountrySelected/CountrySelected';
import CategorySelected from '../../../../../../component/dashboard/banner/CategorySelected/CategorySelected';

const SearchBanner = ({ setBanners, setLoading }) => {

    const [values, setValues] = useState({ category: '', active: '', country: '' });
    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await getAllBannersApi(values);
        if (response.status === 'success' && response.result) setBanners(response.result);
        setLoading(false);
    };

    return (
        <form className='searchBanner' onSubmit={handleSubmit}>
            <div>
                <CategorySelected handleChange={handleChange} isRequired={false} />
            </div>
            <div>
                <CountrySelected handleChange={handleChange} isRequired={false} />
            </div>
            <div>
                <label>Activo</label>
                <select name="active" onChange={handleChange}>
                    <option value=""></option>
                    <option value='true'>Si</option>
                    <option value='false'>No</option>
                </select>
            </div>
            <button className='btn btnA'>Buscar</button>
        </form>
    );
};

export default SearchBanner;