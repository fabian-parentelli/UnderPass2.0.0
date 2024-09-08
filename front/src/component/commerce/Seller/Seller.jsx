import './seller.scss';
import { useEffect, useState } from 'react';
import Pager from '../../utils/Pager/Pager.jsx';
import SellerTable from '../SellerTable/SellerTable.jsx';
import { getOrderSellerApi } from '../../../helpers/orderSeller/getOrderSeller.api.js';

const Seller = ({ userId, setLoading }) => {

    const [values, setValues] = useState(null);
    const [page, setPage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const query = { userid: userId, active: true }
            if (page) query.page = page;
            const response = await getOrderSellerApi(query);               
            if (response.status === 'success') setValues(response.result);
            else console.log(response);
            setLoading(false);
        }; fetchData();
    }, [page]);

    const HandleChangePage = async (newPage) =>{ if (newPage !== page) setPage(newPage)}

    return (
        <div className='seller'>
            {values && <SellerTable values={values} />}
            <div className='sellerPage'><Pager users={values} HandleChangePage={HandleChangePage} /></div>
        </div>
    );
};

export default Seller;