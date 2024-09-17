import './VewProductsDas.scss';
import { useState } from 'react';
import Load from '../../../../component/utils/Load.jsx';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Pager from '../../../../component/utils/Pager/Pager.jsx';
import Title from '../../../../component/dashboard/Title/Title';
import { getAllProductsApi } from '../../../../helpers/products/getAllProducts.api.js';
import SearchProduct from '../../../../component/products/SearchProduct/SearchProduct.jsx';
import FormVewProduct from '../../../../component/products/FormVewProduct/FormVewProduct.jsx';

const VewProductsDas = () => {

    const [products, setProducts] = useState([]);
    const [paginate, setPaginate] = useState(null);
    const [loading, setLoading] = useState(false);

    const HandleChangePage = async (page) => {
        setLoading(true);
        const response = await getAllProductsApi({ page: page, publicity: 'false' });
        if (response.status === 'success') {
            setProducts(response.result.docs);
            setPaginate(response.result);
        } else console.log(response);
        setLoading(false);
    };

    return (
        <div className='VewProductsDas'>
            <Title Icon={StorefrontIcon} name='Todos los productos' />
            <SearchProduct setProducts={setProducts} setPaginate={setPaginate} setLoading={setLoading} />
            {products && <FormVewProduct products={products} setProducts={setProducts} setLoading={setLoading} />}
            {paginate && <Pager users={paginate} HandleChangePage={HandleChangePage} />}
            <Load loading={loading} />
        </div>
    );
};

export default VewProductsDas;