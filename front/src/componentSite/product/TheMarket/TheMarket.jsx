import './theMarket.scss';
import { useState } from 'react';
import Load from '../../../component/utils/Load';
import Pager from '../../../component/utils/Pager/Pager';
import FilterProduct from './FilterProduct/FilterProduct';
import CardProducts from '../../../component/products/CardProducts/Cardproducts';

const TheMarket = () => {

    const [products, setProducts] = useState(null);
    const [loadin, setLoading] = useState(false);
    const [page, setPage] = useState(null);

    const HandleChangePage = async (page) => setPage(page);

    return (
        <div className='theMarket'>
            <h2>El Mercado</h2>
            <FilterProduct setProducts={setProducts} setLoading={setLoading} page={page} />
            {products && <CardProducts products={products.docs} />}
            {products && <div style={{ marginTop: '4rem' }}><Pager users={products} HandleChangePage={HandleChangePage} /></div>}
            <Load loading={loadin} />
        </div>
    );
};

export default TheMarket;