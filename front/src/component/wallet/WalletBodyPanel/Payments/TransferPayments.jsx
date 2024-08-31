import { useEffect, useState } from 'react';
import Pager from '../../../utils/Pager/Pager.jsx';
import { getTransferApi } from '../../../../helpers/transfer/getTransfer.api.js';
import TransferTable from '../../tablesWallet/TransferTable/PaymentsTable.jsx';

const TransferPayments = ({ wallet, setLoading }) => {

    const [transfers, setTransfers] = useState(null);
    const [page, setPage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const query = { user: wallet.userId };
            if (page) query.page = page;
            const response = await getTransferApi(query);
            if (response.status === 'success') setTransfers(response.result);
            else console.error(response.error);
            setLoading(false);
        };; fetchData();
    }, [page]);

    const HandleChangePage = (page) => setPage(page);

    return (
        <div className='payments'>
            <h2>Transferencias</h2>
            {transfers && <TransferTable transfers={transfers} />}
            <div style={{ marginTop: '2rem' }}>
                <Pager users={transfers} HandleChangePage={HandleChangePage} />
            </div>
        </div>
    );
};

export default TransferPayments;