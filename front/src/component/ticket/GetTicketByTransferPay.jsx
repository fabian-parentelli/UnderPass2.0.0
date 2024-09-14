import { useEffect, useState } from "react";
import { getTransferPayById } from "../../helpers/transferPay/getTransferPayById.api";
import LoadSmallB from "../utils/LoadSmallB/LoadSmallB";

const GetTicketByTransferPay = ({ ticketId }) => {

    const [ticket, setTicket] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getTransferPayById(ticketId);
            if(response.status === 'success') setTicket(response.result.imgUrl);
            else console.error(response.error);
        }; fetchData();
    }, []);

    return (
        <>
            {ticket
                ? <img style={{width: '300px'}} src={ticket} alt="img" />
                : <LoadSmallB />
            }
        </>
    );
};

export default GetTicketByTransferPay;