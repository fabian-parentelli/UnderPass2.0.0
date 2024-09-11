import './haveAPay.scss';
import { useEffect, useState } from 'react';
import { getTransferPayById } from '../../../../helpers/transferPay/getTransferPayById.api';
import TransferSendTable from '../../../../component/transfer/TransferSendTable/TransferSendTable';

const HaveAPay = ({ id, setLoading }) => {

    const [transfers, setTransfers] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getTransferPayById(id);
            if (response.status === 'success') {
                const result = [];
                result.push(response.result);
                setTransfers(result);
            } else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);

    return (
        <div className='haveAPay'>
            {transfers && <TransferSendTable transfers={transfers} />}
        </div>
    );
};

export default HaveAPay;