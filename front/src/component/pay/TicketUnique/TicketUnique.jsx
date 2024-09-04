import { useEffect, useState } from 'react';
import './ticketUnique.scss';
import { useParams } from 'react-router-dom';
import { getTicketByOrderApi } from '../../../helpers/ticket/getTicketByOrder.api';
import TicketOnly from '../../../componentSite/alerts/TicketOnly/TicketOnly';

const TicketUnique = () => {

    const { id } = useParams();
    const [ticket, setTicket] = useState(null);

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
        </div>
    );
};

export default TicketUnique;