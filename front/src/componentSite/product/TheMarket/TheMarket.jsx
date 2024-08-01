import './theMarket.scss';
import { useEffect, useState } from 'react';
import Load from '../../../component/utils/Load';
import Pager from '../../../component/utils/Pager/Pager';
import { getAllProductsApi } from '../../../helpers/products/getAllProducts.api';
import CardProducts from '../../../component/products/CardProducts/Cardproducts';

const TheMarket = () => {

    const [products, setProducts] = useState(null);
    const [loadin, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const country = localStorage.getItem('country');
            const response = await getAllProductsApi({ active: true, country: country });
            if (response.status === 'success') setProducts(response.result);
            else console.log(response);
            setLoading(false);
        }; fetchData();
    }, []);

    return (
        <div className='theMarket'>
            <h2>El Mercado</h2>
            {products && <CardProducts products={products.docs} />}
            {products && <Pager users={products} HandleChangePage={''} />}
            <Load loading={loadin} />
        </div>
    );
};

export default TheMarket;