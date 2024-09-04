import './transferVewAlert.scss';
import { useState, useEffect } from 'react';
import Load from '../../../component/utils/Load';
import TicketOnly from '../TicketOnly/TicketOnly';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { useParams } from 'react-router-dom';
import Title from '../../../component/dashboard/Title/Title';
import { getTicketByIdApi } from '../../../helpers/ticket/getTicketById.api.js';
import TransferRecived from '../../dashboard/economy/Cash/body/transfers/TransferRecived/TransferRecived';

const TransferVewAlert = () => {

    const { id } = useParams();
    const [transferId, setTransferId] = useState({ _id: id });
    const [loading, setLoading] = useState(false);
    const [ticket, setTicket] = useState(null);

    useEffect(() => {
        const fecthData = async () => {
            const response = await getTicketByIdApi(id);
            if (response.status === 'success') setTicket(response.result);
            else console.error(response.error);
        }; fecthData();
    }, []);

    return (
        <div className='transferVewAlert'>
            <Title Icon={ReceiptIcon} name='Recibiste una tranferencia' goTo={'/help'} />
            <div style={{ marginTop: '2rem' }}>
                <TransferRecived setLoading={setLoading} values={transferId} />
            </div>
            <div className='transferVewAlertTiekcet'>
                <TicketOnly ticket={ticket} />
            </div>
            <Load loading={loading} />
        </div>
    );
};

export default TransferVewAlert;