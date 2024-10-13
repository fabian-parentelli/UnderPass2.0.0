import './ticketsTrue.scss';
import { useState } from 'react';
import TicketsTrueVew from './TicketsTrueVew/TicketsTrueVew';
import TicketsTrueForm from './TicketsTrueForm/TicketsTrueForm';
import { updEventApi } from '../../../../helpers/event/updEvent.api.js';

const TicketsStrue = ({ values, setValues, setLoading, setProgres }) => {

    const [tickets, setTickets] = useState(values.ticketInfo || []);
    const [ticket, setTicket] = useState({ active: true });

    const handleSubmit = (e) => {
        e.preventDefault();
        const bag = [...tickets];
        bag.push(ticket);
        setTickets(bag);
        setTicket({ active: true });
    };

    const handleConfirem = async () => {
        setLoading(true);
        const data = { ...values };
        data.ticketInfo = tickets;
        const response = await updEventApi(data);
        if (response.status === 'success') {
            console.log(response.result);
            
            setValues(response.result);
            setProgres(100);
        } else console.error(response.error);
        setLoading(false);
    };    

    return (
        <div className='ticketstrue'>
            <h3>Crear entradas.</h3>
            <p>Existen tres etapas, la primera es crear la entrada, la siguiente es agregarla y por último confirmar todas las entradas que has creado.</p>

            <TicketsTrueForm
                values={values}
                handleSubmit={handleSubmit}
                ticket={ticket}
                setTicket={setTicket}
            />

            {tickets.length > 0 && <TicketsTrueVew tickets={tickets} setTickets={setTickets} values={values} />}

            {tickets.length > 0 &&
                <button
                    style={{ marginTop: '1rem' }}
                    className='btn btnUE'
                    onClick={handleConfirem}
                >
                    Confirmar
                </button>
            }

            <div className='eventImagesBtnsBotton'>
                <button className='btn btnD' onClick={() => setProgres(60)}>Volver</button>
                <button className='btn btnD' onClick={() => setProgres(100)}>Continuar</button>
            </div>
        </div>
    );
};

export default TicketsStrue;