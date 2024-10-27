import { useEffect, useState } from 'react';
import Pager from '../../../../component/utils/Pager/Pager.jsx';
import { getEventsApi } from '../../../../helpers/event/getEvents.api.js';
import EventPrint from '../../../../component/events/EventPrint/EventPrint.jsx';
import { getEventsPublicApi } from '../../../../helpers/event/getEventsPublic.api.js';

const EventOthers = () => {

    const [events, setEvents] = useState(null);
    const [query, setQuery] = useState({ active: true, country: localStorage.getItem('country'), publicity: false, limit: 4 });

    useEffect(() => {
        const fetchData = async () => {
            let response;
            if (localStorage.getItem('token')) response = await getEventsApi(query);
            else response = await getEventsPublicApi(query);
            if (response.status === 'success') setEvents(response.result);
            else console.error(response.error);
        }; fetchData();
    }, [query]);

    const handleChangePage = (page) => setQuery({ ...query, page });

    return (
        <div>
            {events && <EventPrint events={events.docs} />}
            <Pager users={events} HandleChangePage={handleChangePage} />
        </div>
    );
};

export default EventOthers;