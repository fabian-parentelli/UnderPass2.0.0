import './transferRecived.scss';
import { useEffect, useState } from 'react';
import Pager from '../../../../../../../component/utils/Pager/Pager.jsx';
import { getTransferApi } from '../../../../../../../helpers/transfer/getTransfer.api.js';
import TransferTable from '../../../../../../../component/wallet/tablesWallet/TransferTable/TransferTable.jsx';
import { confirmTransferApi } from '../../../../../../../helpers/transfer/confirmTransfer.api.js';

const TransferRecived = ({ country, setLoading, values }) => {

    const [transfers, setTransfers] = useState(null);
    const [page, setPage] = useState(null);

    useEffect(() => {
        const fetchdata = async () => {
            setLoading(true);
            const query = {};
            if (country) query.country = country
            if (page) query.page = page;
            if (values.type) query.type = values.type;
            if (values.confirm) query.confirm = values.confirm;
            if (values._id) query.id = values._id
            const response = await getTransferApi(query);
            if (response.status === 'success') setTransfers(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchdata();
    }, [country, page, values]);

    const HandleChangePage = (page) => setPage(page);

    const handleConfirm = async (id) => {
        // setLoading(true);
        const response = await confirmTransferApi(id);
        if (response.status === 'success') {
            const tranfersCopy = { ...transfers };
            const index = tranfersCopy.docs.findIndex(tra => tra._id === response.result._id);
            tranfersCopy.docs[index] = response.result;
            setTransfers(tranfersCopy);
        } else console.error(response.error);
        // setLoading(false);
    };

    return (
        <div className='transferRecived'>
            <TransferTable
                transfers={transfers}
                handleConfirm={handleConfirm}
                setTransfers={setTransfers}
                setLoading={setLoading}
            />
            <Pager users={transfers} HandleChangePage={HandleChangePage} />
        </div>
    );
};

export default TransferRecived;