import './eventPanelVew.scss';
import { useState } from 'react';
import EventFilter from '../../EventFilter/EventFilter';
import Pager from '../../../utils/Pager/Pager';
import EventTable from '../../EventTable/EventTable';

const EventPanelVew = ({ user, setLoading }) => {

    const [query, setQuery] = useState({ userid: user._id || null });
    const [events, setEvents] = useState(null);

    const handleChangePage = (page) => setQuery({ ...query, page: page });

    return (
        <div className='eventPanelVew'>
            <EventFilter query={query} setQuery={setQuery} setEvents={setEvents} setLoading={setLoading} />
            {events && <EventTable events={events} setEvents={setEvents} setLoading={setLoading} />}
            <Pager users={events} HandleChangePage={handleChangePage} />
        </div>
    );
};

export default EventPanelVew;