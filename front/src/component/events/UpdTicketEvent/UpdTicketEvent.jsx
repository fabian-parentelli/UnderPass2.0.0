import './updTicketEvent.scss';
import { useState } from 'react';
import { Spinner } from 'faradaycomp';
import TicketsTrueVew from '../TicketsCreate/TicketsTrue/TicketsTrueVew/TicketsTrueVew';
import { updEventApi } from '../../../helpers/event/updEvent.api.js';

const UpdTicketEvent = ({ event, closedTicket, setEvents, events }) => {

    const [tickets, setTickets] = useState(event.ticketInfo || []);
    const [loading, setLoading] = useState(false);

    const handleConfirm = async () => {
        setLoading(true);
        const data = { ...event };
        data.ticketInfo = tickets;
        const response = await updEventApi(data);
        if (response.status === 'success') {
            const allEvents = { ...events };
            const index = allEvents.docs.findIndex(i => i._id == response.result._id);
            allEvents.docs[index] = response.result;
            setEvents(allEvents);
            closedTicket()
        } else console.error(response.error);
        setLoading(false);
    };

    return (
        <div className='updTicketEvent'>
            {loading ? <Spinner color={'#383f84'} />
                : <>
                    <TicketsTrueVew tickets={tickets} setTickets={setTickets} values={event} />
                    <button
                        onClick={handleConfirm}
                        className='btn btnUE'
                    >
                        Confirmar
                    </button>
                </>
            }
        </div>
    );
};

export default UpdTicketEvent;