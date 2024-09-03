import Title from '../../../component/dashboard/Title/Title';
import './transferVewAlert.scss';
import { useParams } from 'react-router-dom';
import ReceiptIcon from '@mui/icons-material/Receipt';
import TransferRecived from '../../dashboard/economy/Cash/body/transfers/TransferRecived/TransferRecived';
import Load from '../../../component/utils/Load';
import { useEffect, useState } from 'react';

const TransferVewAlert = () => {

    const { id } = useParams();
    const [transferId, setTransferId] = useState({ _id: id });
    const [loading, setLoading] = useState(false);

    return (
        <div className='transferVewAlert'>
            <Title Icon={ReceiptIcon} name='Recibiste una tranferencia' goTo={'/help'} />
            <div style={{ marginTop: '2rem' }}>
                <TransferRecived setLoading={setLoading} values={transferId} />
            </div>

            <Load loading={loading} />
        </div>
    );
};

export default TransferVewAlert;