import './eventDelete.scss';
import { useState } from 'react';
import { Spinner } from 'faradaycomp';
import { useNavigate } from 'react-router-dom';
import { deleteEventApi } from '../../../helpers/event/deleteEvent.api.js';

const EventDelete = ({ event, closedDelete, setEvents, events }) => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const difference = new Date() - new Date(event.dateCreate);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const handleDelete = async () => {
        setLoading(true);
        const response = await deleteEventApi(event._id);
        if (response.status === 'success') {
            if (events) {
                const data = { ...events };
                const restEvents = data.docs.filter(eve => eve._id != event._id);
                data.docs = restEvents;
                setEvents(data);
                closedDelete();
            } else {
                localStorage.removeItem('event');
                navigate('/');
            };
        } else console.error(response.error);
        setLoading(false);
    };

    return (
        <div className='eventDelete'>
            <h2>Eliminar evento</h2>
            {loading
                ? <Spinner color={'#383f84'} />
                : <div className='eventDeleteDIv'>
                    <p>Días transucrridos:</p>
                    <p style={{ color: days > 30 && 'red' }} >{days} días.</p>

                    <p>¿Seguro quieres eliminar este evento?</p>

                    <div className='eventDeleteBTN'>
                        <button className='btn btnUE' onClick={handleDelete}>SI</button>
                        <button className='btn btnD' onClick={closedDelete}>NO</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default EventDelete;