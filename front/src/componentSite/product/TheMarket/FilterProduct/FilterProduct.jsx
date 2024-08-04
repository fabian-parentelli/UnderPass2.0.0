import './filterProduct.scss';
import { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Checkboxes from '../../../../component/utils/Checkboxes.jsx';
import { useLoginContext } from '../../../../context/LoginContext.jsx';
import TipsSearchproduct from '../TipsSearchProduct/TipsSearchProduct.jsx';
import SelectedProvince from '../../../../component/utils/SelectedProvince.jsx';
import { getAllProductsApi } from '../../../../helpers/products/getAllProducts.api.js';

const FilterProduct = ({ setProducts, setLoading }) => {
    const { user } = useLoginContext();
    const [province, setProvince] = useState({ province: '' });
    const [star, setStar] = useState(false);
    const [type, setType] = useState('');
    const [query, setQuery] = useState({ active: true, country: localStorage.getItem('country'), limit: 40 });

    const handleChange = (e) => setProvince({ [e.target.name]: e.target.value });

    useEffect(() => {
        const updatedQuery = { ...query, ...province };
        if (user && user.data) {
            updatedQuery.location = user.data.location.province;
            if (star) updatedQuery.user = user.data._id;
            else delete updatedQuery.user;
        };
        if(type) {
            if(type === 'Merchandising') updatedQuery.inSite = 'true';
            else if (type === 'Productos') updatedQuery.inSite = 'false';
            else delete updatedQuery.inSite;
        };
        
        const fetchData = async () => {
            setLoading(true);
            const response = await getAllProductsApi(updatedQuery);
            if (response.status === 'success') setProducts(response.result);
            else console.log(response);
            setLoading(false);
        };
        fetchData();
    }, [province, star, query, type]);

    const handleStar = () => setStar(prevStar => !prevStar);
    
    return (
        <div className='filterProduct'>
            <div className='filterProductFilter'>
                <SelectedProvince handleChange={handleChange} required={false} />
                <div className='filterProductReturn' onClick={() => setProvince({})}>
                    <ReplyAllIcon />
                </div>
            </div>

            <div className='SelectedAll'>
                <Checkboxes labels={['Todos', 'Merchandising', 'Productos']} setType={setType} />
            </div>

            <div className='filterProductRight'>
                <TipsSearchproduct setProducts={setProducts} star={star} />
                {user && user.logged && user.data.favorites.length > 0 && (
                    star
                        ? <StarIcon className='iconStar' onClick={handleStar} />
                        : <StarBorderIcon className='iconStar' onClick={handleStar} />
                )}
            </div>
        </div>
    );
};

export default FilterProduct;