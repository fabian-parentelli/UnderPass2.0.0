import './bodyProduct.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoadSmall from '../../../component/utils/LoadSmall/LoadSmall.jsx';
import CardProducts from '../../../component/products/CardProducts/Cardproducts.jsx';
import { getProductsRandomApi } from '../../../helpers/products/getProductRandom.api.js';
import UnderMarketLog from '../../../component/fonts/UnderMarketLog/UnderMarketLog.jsx';

const BodyProduct = () => {

    const [products, setProducts] = useState([]);
    const broad = window.innerWidth > 767 ? 4 : 3;

    useEffect(() => {
        const fetchData = async () => {
            const response = await getProductsRandomApi();
            if (response.status === 'success') setProducts(response.result);
            else console.log(response);
        }; fetchData();
    }, []);

    return (
        <div className='bodyProduct'>

            <div className='bodyProductTile'><UnderMarketLog size={broad} /></div>

            {!products ? <LoadSmall />
                : <div className='bodyProductIn'><CardProducts products={products} /></div>
            }
            <Link to={'/themarket'} className='theMarkets'><p className='bodyProductP'>Ver mas productos</p></Link>
        </div>
    );
};

export default BodyProduct;