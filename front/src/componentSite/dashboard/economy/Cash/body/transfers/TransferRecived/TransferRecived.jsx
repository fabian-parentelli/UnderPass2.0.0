import './transferRecived.scss';
import { useEffect, useState } from 'react';
import { getTransferApi } from '../../../../../../../helpers/transfer/getTransfer.api.js';
import TransferTable from '../../../../../../../component/wallet/tablesWallet/TransferTable/PaymentsTable.jsx';
import Pager from '../../../../../../../component/utils/Pager/Pager.jsx';

const TransferRecived = ({ country, setLoading }) => {

    const [transfers, setTransfers] = useState(null);
    const [page, setPage] = useState(null);
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        const fetchdata = async () => {
            setLoading(true);
            const query = { country: country };
            if (page) query.page = page;
            const response = await getTransferApi(query);
            if (response.status === 'success') setTransfers(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchdata();
    }, [country, page]);

    const HandleChangePage = (page) => setPage(page);
    const handleFileChange = (data) => setFormData(data);

    const handleConfirm = async (id) => {
        console.log(id);
    };

    const handleUpdCloud = () => {


        // Acá tengo la imagen, foldername, y pid:  que es el id de la transferencia.... 

        formData.forEach((value, key) => {
            console.log(`${key}:`, value);
        });
    };

    return (
        <div className='transferRecived'>
            <TransferTable
                transfers={transfers}
                handleConfirm={handleConfirm}
                handleFileChange={handleFileChange}
                handleUpdCloud={handleUpdCloud}
            />

            <Pager users={transfers} HandleChangePage={HandleChangePage} />
        </div>
    );
};

export default TransferRecived;