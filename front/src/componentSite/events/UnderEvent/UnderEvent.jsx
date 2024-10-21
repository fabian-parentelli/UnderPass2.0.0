import './underEvent.scss';
import { useState } from 'react';
import UnderEventFont from '../../../component/fonts/UnderEventsFont/UnderEventsFont';
import EventFilter from '../../../component/events/EventFilter/EventFilter';
import EventPrint from '../../../component/events/EventPrint/EventPrint';
import Pager from '../../../component/utils/Pager/Pager';
import Load from '../../../component/utils/Load';

const UnderEvent = () => {

    const [query, setQuery] = useState({
        active: true, country: localStorage.getItem('country'), publicity: true, limit: 40
    });
    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChangePage = (page) => setQuery({ ...query, page: page });

    return (
        <div className='underEvent'>
            <UnderEventFont size={4} />
            <EventFilter query={query} setQuery={setQuery} setEvents={setEvents} setLoading={setLoading} isActive={false} isFavorite={true} />
            {events && <EventPrint events={events.docs} />}
            <Pager users={events} HandleChangePage={handleChangePage} />
            <Load loading={loading} />
        </div>
    );
};

export default UnderEvent;