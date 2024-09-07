import { useEffect, useState } from 'react';
import './reqTranferAlert.scss';
import { getTransferApi } from '../../../../helpers/transfer/getTransfer.api.js';
import { confirmTransferApi } from '../../../../helpers/transfer/confirmTransfer.api.js';
import TransferTable from '../../../../component/wallet/tablesWallet/TransferTable/TransferTable';

const ReqTranferAlert = ({ id, setLoading }) => {

    const [transfers, setTransfers] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getTransferApi({ id: id });
            if (response.status === 'success') setTransfers(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);

    const handleConfirm = async (id) => {
        setLoading(true);
        const response = await confirmTransferApi(id);
        if (response.status === 'success') {
            const tranfersCopy = { ...transfers };
            const index = tranfersCopy.docs.findIndex(tra => tra._id === response.result._id);
            tranfersCopy.docs[index] = response.result;
            setTransfers(tranfersCopy);
        } else console.error(response.error);
        setLoading(false);
    };

    return (
        <div className='reqTranferAlert'>
            <TransferTable 
                transfers={transfers}
                handleConfirm={handleConfirm}
                setTransfers={setTransfers}
                setLoading={setLoading}
            />
        </div>
    );
};

export default ReqTranferAlert;