import './transferPay.scss';
import { useState } from 'react';
import Debt from '../../Debt/Debt';
import { useParams } from 'react-router-dom';
import Load from '../../../../component/utils/Load';
import UploadTransfer from '../UploadTransfer/UploadTransfer';
import CountdownTimer from '../../../../component/utils/CountDownTimer';

const TransferPay = () => {

    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);

    return (
        <div className='transferPay'>
            <div className='transferPayTime'>
                <p>Tiempo restane:</p>
                <CountdownTimer number={10} />
            </div>

            <div className='underPayTitle'>
                <h2>Transferencia</h2>
                <p>Para confirmar tu transferencia, te pedimos que envíes el comprobante a través de una de las siguientes opciones: nuestra plataforma, WhatsApp, o completando los datos del ticket de transferencia. Una vez recibido, acreditaremos tu pago en un plazo de hasta 48 horas hábiles.</p>
            </div>

            <div className='transferPayDebt'>
                <Debt orderId={id} setOrder={setOrder} setLoading={setLoading} />
            </div>

            <UploadTransfer order={order} />

            <Load loading={loading} />
        </div>
    );
};

export default TransferPay;