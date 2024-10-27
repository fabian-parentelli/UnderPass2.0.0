import './updTicketEvent.scss';
import { useState } from 'react';
import { Spinner } from 'faradaycomp';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { updEventApi } from '../../../helpers/event/updEvent.api.js';
import TicketsTrueVew from '../TicketsCreate/TicketsTrue/TicketsTrueVew/TicketsTrueVew';
import TicketsTrueForm from '../TicketsCreate/TicketsTrue/TicketsTrueForm/TicketsTrueForm.jsx';

const UpdTicketEvent = ({ event, closedTicket, setEvents, events }) => {

    const [tickets, setTickets] = useState(event.ticketInfo || []);
    const [ticket, setTicket] = useState({
        active: true, dateEnd: '', description: '', hourEnd: '', price: '', quantity: ''
    });
    const [loading, setLoading] = useState(false);
    const [vew, setVew] = useState(false);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = [...tickets];
        data.push(ticket);
        setTickets(data);
        setVew(false);
    };

    return (
        <div className='updTicketEvent'>
            {loading ? <div className='updTicketEventSpinner'><Spinner color={'#383f84'} /></div>
                : <>
                    <TicketsTrueVew tickets={tickets} setTickets={setTickets} values={event} tic={!event.tickets} />
                    {vew &&
                        <div style={{marginTop: '1rem'}}>
                            <TicketsTrueForm
                                values={event}
                                handleSubmit={handleSubmit}
                                ticket={ticket}
                                setTicket={setTicket}
                            />
                        </div>
                    }
                    <div className='updTicketEventButtons'>
                        <div className='updTicketEventMessage'>
                            <AddBoxIcon className='updTicketEventIcon' onClick={() => setVew(!vew)} />
                            <p className='updTicketEventToolTip'>Agregar otra entrada</p>
                        </div>
                        <button onClick={handleConfirm} className='btn btnUE' >Confirmar</button>
                    </div>
                </>
            }
        </div>
    );
};

export default UpdTicketEvent;