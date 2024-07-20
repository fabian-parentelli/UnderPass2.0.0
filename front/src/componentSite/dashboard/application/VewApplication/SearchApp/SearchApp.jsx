import './searchApp.scss';
import { useState } from 'react';
import CategorySelected from '../../../../../component/dashboard/banner/CategorySelected/CategorySelected';
import CountrySelected from '../../../../../component/dashboard/banner/CountrySelected/CountrySelected';
import { getAllApplicationApi } from '../../../../../helpers/applications/getAllApplicatiosn.api.js';

const SearchApp = ({ setAppli, setLoading }) => {

    const [values, setValues] = useState({
        category: '', active: '', country: '', type: '', pay: ''
    });
    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await getAllApplicationApi(values);
        if (response.status === 'success' ) setAppli(response.result);
        else console.log(response);
        setLoading(false);
    };

    return (
        <form className='searchApp' onSubmit={handleSubmit}>
            <div>
                <CategorySelected handleChange={handleChange} isRequired={false} />
            </div>

            <div>
                <CountrySelected handleChange={handleChange} isRequired={false} />
            </div>

            <div>
                <label>Activo</label>
                <select name="active" onChange={handleChange} >
                    <option value=""></option>
                    <option value='true'>Si</option>
                    <option value='false'>No</option>
                </select>
            </div>

            <div>
                <label>Tipo</label>
                <select name="type" onChange={handleChange} >
                    <option value=""></option>
                    <option value='banner'>Banner</option>
                    <option value='card'>Cards</option>
                </select>
            </div>

            <div>
                <label>Pago</label>
                <select name="pay" onChange={handleChange} >
                    <option value=""></option>
                    <option value='true'>Si</option>
                    <option value='false'>No</option>
                </select>
            </div>

            <button className='btn btnA'>Buscar</button>
        </form>
    );
};

export default SearchApp;