import './SearchProduct.scss';
import { useState } from 'react';
import { getAllProductsApi } from '../../../helpers/products/getAllProducts.api';
import SelectedProvince from '../../utils/SelectedProvince';

const SearchProduct = ({ setProducts, setPaginate, setLoading }) => {

    const [values, setValues] = useState({ inSite: '', country: '', active: '', province: '' });

    const handleChange = async (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await getAllProductsApi(values);
        if (response.status === 'success') {
            setProducts(response.result.docs);
            setPaginate(response.result);
        } else console.log(response);
        setLoading(false);
    };

    return (
        <form className='SearchProduct' onSubmit={handleSubmit}>

            <select name="inSite" onChange={handleChange}>
                <option value="">Ver en tu sitio</option>
                <option value="true">Si</option>
                <option value="false">No</option>
            </select>

            <select name="country" onChange={handleChange}>
                <option value="">Pais</option>
                <option value="AR">Argentina</option>
                <option value="UY">Uruguay</option>
            </select>

            <select name="active" onChange={handleChange}>
                <option value="">Activo</option>
                <option value="true">Si</option>
                <option value="false">No</option>
            </select>

            <div style={{ width: '150px' }}>
                <SelectedProvince handleChange={handleChange} required={false} />
            </div>

            <button className='btn btnB'>Filtrar</button>
        </form>
    );
};

export default SearchProduct;