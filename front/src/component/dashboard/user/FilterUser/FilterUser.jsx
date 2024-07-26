import './filterUser.scss';
import { useState } from 'react';
import SearchFilter from './SearchFilter/SearchFilter';
import { getPaginateUserApi } from '../../../../helpers/users/getPaginateUser.api.js';

const FilterUser = ({ setUsers, setLoading }) => {

    const [values, setValues] = useState({ active: '', country: '' });

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await getPaginateUserApi(values);
        if (response.status === 'success') setUsers(response.result);
        else console.log(response);
        setLoading(false);
    };

    return (
        <div className='filterUser'>

            <form onSubmit={handleSubmit}>
                <select name="active" onChange={handleChange} defaultValue="">
                    <option value="">Activo</option>
                    <option value="true">Sí</option>
                    <option value="false">No</option>
                </select>
                <select name="country" onChange={handleChange} defaultValue="">
                    <option value="">País</option>
                    <option value="AR">Argentina</option>
                    <option value="UY">Uruguay</option>
                </select>
                <button className='btn btnC'>Filtrar</button>
            </form>

            <SearchFilter setUsers={setUsers} setLoading={setLoading} />
        </div>
    );
};

export default FilterUser;