import { useEffect } from 'react';
import './bodyProduct.scss';
import { Link } from 'react-router-dom';
import { getProductsRandomApi } from '../../../helpers/products/getProductRandom.api.js';

const BodyProduct = () => {

    useEffect(() => {
        const fetchData = async () => {
            const response = await getProductsRandomApi();
            

        }; fetchData();
    }, []);

    return (
        <div className='bodyProduct'>
            <Link to={'/themarket'} className='theMarkets'><h2>El mercado</h2></Link>
        </div>
    );
};

export default BodyProduct;