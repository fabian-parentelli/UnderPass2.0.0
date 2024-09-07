import './haveMoneyAlerts.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TicketOnly from '../../TicketOnly/TicketOnly.jsx';
import { getTicketByIdApi } from '../../../../helpers/ticket/getTicketById.api.js';
import { useUnderContext } from '../../../../context/UnderContext.jsx';

const HaveMoneyAlerts = ({ id, setLoading }) => {

    const [ticket, setTicket] = useState(null);
    const { underData } = useUnderContext();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getTicketByIdApi(id);
            if (response.status === 'success') setTicket(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);

    return (
        <div className='haveMoneyAlertss'>
            {ticket && <TicketOnly ticket={ticket} />}
            <div className='haveMoneyAlertssP'>
                <p>Recuerda que puedes retirar el dinero cuando lo desees.</p>
                <Link to={'/profile/wallet'} style={{ textDecoration: 'none' }}>
                    <button className='btn btnD haveMoneyAlertssBtn'>Under<span>Pay</span></button>
                </Link>
                <p>El plazo es de aproximadamente 48 horas.</p>
                <p>Mientras el dinero permanesca en la plataforma</p>
                <p>generará un rendimiento de {underData.perfomance}% anual.</p>
                <button className='btn btnA' onClick={() => navigate(-1)}>Volver</button>
            </div>
        </div>
    );
};

export default HaveMoneyAlerts;