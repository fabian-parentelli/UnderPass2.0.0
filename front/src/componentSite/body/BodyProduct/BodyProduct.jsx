import './bodyProduct.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoadSmall from '../../../component/utils/LoadSmall/LoadSmall.jsx';
import CardProducts from '../../../component/products/CardProducts/Cardproducts.jsx';
import { getProductsRandomApi } from '../../../helpers/products/getProductRandom.api.js';

const BodyProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getProductsRandomApi();
            if (response.status === 'success') setProducts(response.result);
            else console.log(response);
        }; fetchData();
    }, []);

    return (
        <div className='bodyProduct'>
            <Link to={'/themarket'} className='theMarkets'><h2>El mercado</h2></Link>
            {!products ? <LoadSmall />
                : <CardProducts products={products} />
            }
            <Link to={'/themarket'} className='theMarkets'><p className='bodyProductP'>Ver mas</p></Link>
        </div>
    );
};

export default BodyProduct;