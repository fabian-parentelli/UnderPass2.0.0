import './tipsSearchproduct.scss';
import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import { useLoginContext } from '../../../../context/LoginContext';
import { getAllProductsApi } from '../../../../helpers/products/getAllProducts.api.js';
import { getByTipsSearchApi } from '../../../../helpers/products/getByTipsSearch.api.js';

const TipsSearchproduct = ({ setProducts, star }) => {

    const { user } = useLoginContext();
    const [values, setValues] = useState('');
    const [query, setQuery] = useState({ active: true, country: localStorage.getItem('country'), limit: 40 });
    const handleInputChange = (e) => { setValues(e.target.value) };

    useEffect(() => {
        const fetchData = async () => {
            const updatedQuery = { ...query };
            if (user && user.data) {
                updatedQuery.location = user.data.location.province;
                if (star) updatedQuery.user = user.data._id;
                else delete updatedQuery.user;
            };
            if (!values) {
                const response = await getAllProductsApi(updatedQuery);
                if (response.status === 'success') setProducts(response.result);
                else console.log(response);
            } else {
                const data = await getByTipsSearchApi(values, star ? user.data._id : false);
                if (data.status === 'success') setProducts(data.result);
                else console.log(data);
            };
        }; fetchData();
    }, [values, star]);

    return (
        <div className='tipsSearchproduct'>
            <SearchIcon />
            <input
                type="text"
                style={{ borderColor: 'white', width: '180px' }}
                placeholder='Buscar producto'
                value={values}
                onChange={handleInputChange}
            />
            <div className='filterProductReturn' onClick={() => setValues('')}>
                <ReplyAllIcon />
            </div>
        </div>
    );
};

export default TipsSearchproduct;