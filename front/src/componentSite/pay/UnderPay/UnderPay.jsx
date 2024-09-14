import './underPay.scss';
import { useState } from 'react';
import PayCart from './PayCart/PayCart';
import { useParams } from 'react-router-dom';
import Load from '../../../component/utils/Load';
import CountdownTimer from '../../../component/utils/CountDownTimer';

const UnderPay = () => {

    const { type, id } = useParams();
    const [loading, setLoading] = useState(false);

    return (
        <div className='underPay'>

            <div className='underPayTime'>
                <p>Tiempo restane:</p>
                <CountdownTimer number={10} />
            </div>

            <div className='underPayTitle'>
                <h2>Under<span>Pay</span></h2>
                <p>UnderPay es la billetera de nuestra plataforma, que te permite utilizar tu saldo disponible para comprar entradas, productos, publicidad, turnos y más. Con UnderPay, puedes acceder a todo lo que ofrecemos dentro de la plataforma de manera sencilla y conveniente.</p>
            </div>

            {type === 'cart' && <PayCart orderId={id} setLoading={setLoading} />}
            <Load loading={loading} />
        </div>
    );
};

export default UnderPay;