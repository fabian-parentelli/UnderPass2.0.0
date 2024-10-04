import './otherProducts.scss';
import { useEffect, useState } from 'react';
import { useLoginContext } from '../../../../context/LoginContext';
import { getAllProductsApi } from '../../../../helpers/products/getAllProducts.api';
import CardProducts from '../../../../component/products/CardProducts/Cardproducts';
import Pager from '../../../../component/utils/Pager/Pager';

const OtherProducts = ({ setLoading }) => {

    const [products, setProducts] = useState(null);
    const { user } = useLoginContext();

    const country = localStorage.getItem('country');
    const query = { active: true, country: country, limit: 4, publicity: 'false' };
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
        <div className='otherProducts'>
            {products && <CardProducts products={products.docs} />}
            {products && <Pager users={products} HandleChangePage={HandleChangePage} />}
        </div>
    );
};

export default OtherProducts;