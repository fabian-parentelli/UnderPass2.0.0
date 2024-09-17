import './SearchProduct.scss';
import { useEffect, useState } from 'react';
import SelectedProvince from '../../utils/SelectedProvince';
import { getAllProductsApi } from '../../../helpers/products/getAllProducts.api.js';
import { getByTipsSearchApi } from '../../../helpers/products/getByTipsSearch.api.js';

const SearchProduct = ({ setProducts, setPaginate, setLoading }) => {

    const [values, setValues] = useState({ inSite: '', country: '', active: '', province: '', publicity: 'false' });
    const [identification, setIdentification] = useState(false);
    const [words, setWords] = useState('');

    const handleChange = async (e) => setValues({ ...values, [e.target.name]: e.target.value });
    const handleWordsChange = (e) => setWords(e.target.value);

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

    useEffect(() => {
        const fecthData = async () => {
            setLoading(true);
            if (words) {
                const query = identification ? { pid: words ? words : '' } : { name: words ? words : '' };
                const response = await getByTipsSearchApi(query);
                if (response.status === 'success') {
                    setProducts(response.result.docs);
                    setPaginate(response.result);
                } else console.error(response);
            } else {
                const response = await getAllProductsApi({ publicity: 'false' });
                if (response.status === 'success') {
                    setProducts(response.result.docs);
                    setPaginate(response.result);
                } else console.log(response);
            };
            setLoading(false);
        }; fecthData();
    }, [words, identification]);

    const handleIdClik = () => {
        setIdentification(!identification)
        setWords('');
    };

    return (
        <div className='SearchProductDIV'>
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

            <div className='SearchProductIdentification'>
                <input
                    type="search"
                    placeholder={identification ? 'Id del producto' : 'Nombre del producto'}
                    onChange={handleWordsChange}
                    value={words}
                />
                <button className='identificationBtn' onClick={handleIdClik} >
                    {!identification ? 'ID' : 'Nombre'}
                </button>
            </div>
        </div>
    );
};

export default SearchProduct;