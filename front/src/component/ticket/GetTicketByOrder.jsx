import { useEffect, useState } from 'react';
import LoadSmallB from '../utils/LoadSmallB/LoadSmallB.jsx';
import TicketOnly from '../../componentSite/alerts/TicketOnly/TicketOnly.jsx';
import { getTicketByOrderApi } from '../../helpers/ticket/getTicketByOrder.api.js';

const GetTicketByOrder = ({ orderId }) => {

    const [ticket, setTicket] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getTicketByOrderApi(orderId);
            if (response.status === 'success') setTicket(response.result);
            else console.error(response.error);
        }; fetchData();
    }, [orderId]);

    return (
        <>
            {ticket
                ? <TicketOnly ticket={ticket} />
                : <LoadSmallB />
            }
        </>
    );
};

export default GetTicketByOrder;