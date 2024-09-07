import './ticketUnique.scss';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTicketByOrderApi } from '../../../helpers/ticket/getTicketByOrder.api.js';
import TicketOnly from '../../../componentSite/alerts/TicketOnly/TicketOnly';

const TicketUnique = () => {

    const { id } = useParams();
    const [ticket, setTicket] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getTicketByOrderApi(id);
            if (response.status === 'success') setTicket(response.result);
            else console.error(response.error);
        }; fetchData();
    }, [])

    return (
        <div className='ticketUnique'>
            {ticket &&
                <TicketOnly ticket={ticket} />
            }
            <button className='btn btnB' onClick={() => navigate(-1)}>Volver</button>
        </div>
    );
};

export default TicketUnique;