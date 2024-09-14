import './collection.scss';
import { useEffect, useState } from 'react';
import Pager from '../../../utils/Pager/Pager.jsx';
import { getTransferPayApi } from '../../../../helpers/transferPay/getTransferPay.api.js';
import TransferSendTable from '../../../transfer/TransferSendTable/TransferSendTable.jsx';

const Collection = ({ wallet, setLoading }) => {

    const [transfers, setTransfers] = useState(null);
    const [pager, setPager] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const query = { userid: wallet.userId };
            if(pager) query.page = pager;
            const response = await getTransferPayApi(query);
            if (response.status === 'success') setTransfers(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, [pager]);

    const HandleChangePage = (page) => setPager(page);

    return (
        <div className='collection'>
            <h4>Transferencias recibidas</h4>
            { transfers && <TransferSendTable transfers={transfers.docs} />}
            <div className='collectionPager'>
                <Pager users={transfers} HandleChangePage={HandleChangePage} />
            </div>
        </div>
    );
};

export default Collection;