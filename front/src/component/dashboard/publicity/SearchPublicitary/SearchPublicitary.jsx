import './searchPublicitary.scss';
import { useState } from 'react';
import CategorySelected from '../../../advertisting/CategorySelected/CategorySelected';
import CountrySelected from '../../banner/CountrySelected/CountrySelected';
import { getAllPublicityApi } from '../../../../helpers/publicity/getAllPublicity.api';

const SearchPublicitary = ({ setPublicitary, setLoading }) => {

    const [values, setValues] = useState({});

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await getAllPublicityApi(values);
        if(response.status === 'success') setPublicitary(response.result);
        else console.log(response);
        setLoading(false);
    };

    return (
        <form className='searchPublicitary' onSubmit={handleSubmit}>

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
                    <option value="true">Si</option>
                    <option value="false">No</option>
                </select>
            </div>

            <div>
                <label>Portal</label>
                <select name="inPortal" onChange={handleChange}>
                    <option value=""></option>
                    <option value="true">Si</option>
                    <option value="false">No</option>
                </select>
            </div>
            
            <div>
                <label>Tipo</label>
                <select name="type" onChange={handleChange}>
                    <option value=""></option>
                    <option value="Cards">Cards</option>
                    <option value="Banner">Banner</option>
                    <option value="Separator">Separador</option>
                </select>
            </div>

            <div>
                <label>ApplicationI d</label>
                <input type="text" name='id' onChange={handleChange}/>
            </div>

            <button className='btn btnB' style={{ color: 'white' }}>Buscar</button>
        </form>
    );
};

export default SearchPublicitary;