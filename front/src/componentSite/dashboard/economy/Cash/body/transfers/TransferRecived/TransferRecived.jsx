import './transferRecived.scss';
import { useEffect, useState } from 'react';
import Pager from '../../../../../../../component/utils/Pager/Pager.jsx';
import { getTransferApi } from '../../../../../../../helpers/transfer/getTransfer.api.js';
import TransferTable from '../../../../../../../component/wallet/tablesWallet/TransferTable/TransferTable.jsx';

const TransferRecived = ({ country, setLoading, values }) => {

    const [transfers, setTransfers] = useState(null);
    const [page, setPage] = useState(null);

    useEffect(() => {
        const fetchdata = async () => {
            setLoading(true);
            const query = { country: country };
            if (page) query.page = page;
            if(values.type) query.type = values.type; 
            if(values.confirm) query.confirm = values.confirm;
            const response = await getTransferApi(query);
            if (response.status === 'success') setTransfers(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchdata();
    }, [country, page, values]);

    const HandleChangePage = (page) => setPage(page);

    const handleConfirm = async (id) => {
        console.log(id); 
        // Hacer funiconar el boton de confirm ...... antes de UnderPay 
        // Esto porque necesito dinero dentro de underPay y es la única manera de tebner dinero adentro... 
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