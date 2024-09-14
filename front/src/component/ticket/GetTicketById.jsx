import { useEffect, useState } from "react";
import LoadSmallB from "../utils/LoadSmallB/LoadSmallB.jsx";
import { getTicketByIdApi } from '../../helpers/ticket/getTicketById.api.js'
import TicketOnly from "../../componentSite/alerts/TicketOnly/TicketOnly.jsx";

const GetTicketById = ({ ticketId }) => {

    const [ticket, setTicket] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getTicketByIdApi(ticketId);
            if (response.status === 'success') setTicket(response.result);
            else console.error(response.error);
        }; fetchData();
    }, []);

    return (
        <>
            {ticket
                ? <TicketOnly ticket={ticket} />
                : <LoadSmallB />
            }
        </>
    );
};

export default GetTicketById;