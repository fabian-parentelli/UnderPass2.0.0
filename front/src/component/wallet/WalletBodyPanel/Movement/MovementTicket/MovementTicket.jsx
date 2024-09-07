import './movementTicket.scss';
import { useEffect, useState } from 'react';
import { getTicketByIdApi } from '../../../../../helpers/ticket/getTicketById.api.js';
import TicketOnly from '../../../../../componentSite/alerts/TicketOnly/TicketOnly';
import LoadSmallB from '../../../../utils/LoadSmallB/LoadSmallB.jsx';

const MovementTicket = ({ ticketId }) => {

    const [ticket, setTicket] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getTicketByIdApi(ticketId);
            if (response.status === 'success') setTicket(response.result);
            else console.error(response.error);
        }; fetchData();
    }, []);

    return (
        <div className='movementTicket'>
            {ticket
                ? <TicketOnly ticket={ticket} />
                : <LoadSmallB />
            }
        </div>
    );
};

export default MovementTicket;