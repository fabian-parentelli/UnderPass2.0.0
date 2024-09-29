import './theMarket.scss';
import { useState } from 'react';
import Load from '../../../component/utils/Load';
import Pager from '../../../component/utils/Pager/Pager';
import FilterProduct from './FilterProduct/FilterProduct';
import CardProducts from '../../../component/products/CardProducts/Cardproducts';
import UnderMarketFont from '../../../component/fonts/UnderMarketFont/UnderMarketFont';

const TheMarket = () => {

    const [products, setProducts] = useState(null);
    const [loadin, setLoading] = useState(false);
    const [page, setPage] = useState(null);

    const HandleChangePage = async (page) => setPage(page);

    return (
        <div className='theMarket'>
            <div className='theMarketTitle'>
                <UnderMarketFont size={4} />
            </div>
            <FilterProduct setProducts={setProducts} setLoading={setLoading} page={page} />
            {products && <div className='bodyProductIn'><CardProducts products={products.docs} /></div>}
            {products && <div style={{ marginTop: '4rem' }}><Pager users={products} HandleChangePage={HandleChangePage} /></div>}
            <Load loading={loadin} />
        </div>
    );
};

export default TheMarket;