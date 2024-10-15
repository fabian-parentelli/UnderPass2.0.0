import './bodyEvents.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getEventsApi } from '../../../helpers/event/getEvents.api.js';
import EventPrint from '../../../component/events/EventPrint/EventPrint.jsx';
import { getEventsPublicApi } from '../../../helpers/event/getEventsPublic.api.js';
import UnderEventsLog from '../../../component/fonts/UnderEventsLog/UnderEventsLog';

const BodyEvents = () => {

    const [events, setEvents] = useState(null);
    const query = { active: true, country: localStorage.getItem('country'), publicity: true };

    useEffect(() => {
        const fetchData = async () => {
            let response
            if(localStorage.getItem('token')) response = await getEventsApi(query);
            else response = await getEventsPublicApi(query);
            if (response.status === 'success') setEvents(response.result);
            else console.error(response.error);
        }; fetchData();
    }, []);

    return (
        <div className='bodyEvents'>
            <UnderEventsLog size={4} />
            {events && events.docs && <EventPrint events={events.docs} />}
            <Link to={'/event'} className='bodyEventsLink' >Ver más eventos</Link>
        </div>
    );
};

export default BodyEvents;