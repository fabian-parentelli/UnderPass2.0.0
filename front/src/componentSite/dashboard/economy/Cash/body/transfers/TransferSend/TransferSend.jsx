import './transferSend.scss';
import { useEffect, useState } from 'react';
import Pager from '../../../../../../../component/utils/Pager/Pager';
import { getTransferPayApi } from '../../../../../../../helpers/transferPay/getTransferPay.api.js';
import TransferSendTable from '../../../../../../../component/transfer/TransferSendTable/TransferSendTable.jsx';

const TransferSend = ({ country, setLoading }) => {

    const [transfers, setTransfers] = useState(null);
    const [pager, setPager] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getTransferPayApi({ country: country });
            if (response.status === 'success') setTransfers(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);

    const HandleChangePage = (id) => setPager(pager === id ? null : id);

    return (
        <div className='transferSend'>
            
            {transfers && <TransferSendTable transfers={transfers.docs} />
}
            <div className='transferSendPager'>
                <Pager users={transfers} HandleChangePage={HandleChangePage} />
            </div>
        </div>
    );
};

export default TransferSend;