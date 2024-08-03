import './theMarket.scss';
import { useEffect, useState } from 'react';
import Load from '../../../component/utils/Load';
import Pager from '../../../component/utils/Pager/Pager';
import { useLoginContext } from '../../../context/LoginContext';
import { getAllProductsApi } from '../../../helpers/products/getAllProducts.api';
import CardProducts from '../../../component/products/CardProducts/Cardproducts';
import FilterProduct from './FilterProduct/FilterProduct';

const TheMarket = () => {

    const [products, setProducts] = useState(null);
    const [loadin, setLoading] = useState(false);
    const { user } = useLoginContext();

    const country = localStorage.getItem('country');
    const query = { active: true, country: country, limit: 40 };
    if (user && user.data) query.location = user.data.location.province;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getAllProductsApi(query);
            if (response.status === 'success') setProducts(response.result);
            else console.log(response);
            setLoading(false);
        }; fetchData();
    }, []);

    const HandleChangePage = async (page) => {
        setLoading(true);
        const newQery = { ...query, page: page };
        const response = await getAllProductsApi(newQery);
        if (response.status === 'success') setProducts(response.result);
        else console.log(response);
        setLoading(false);
    };

    return (
        <div className='theMarket'>
            <h2>El Mercado</h2>
            <FilterProduct setProducts={setProducts} setLoading={setLoading} />
            {products && <CardProducts products={products.docs} />}
            {products && <Pager users={products} HandleChangePage={HandleChangePage} />}
            <Load loading={loadin} />
        </div>
    );
};

export default TheMarket;