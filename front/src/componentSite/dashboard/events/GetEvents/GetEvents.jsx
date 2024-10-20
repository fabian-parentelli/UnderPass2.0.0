import './getEvents.scss';
import { useState } from 'react';
import Load from '../../../../component/utils/Load';
import StadiumIcon from '@mui/icons-material/Stadium';
import Pager from '../../../../component/utils/Pager/Pager';
import Title from '../../../../component/dashboard/Title/Title';
import EventTable from '../../../../component/events/EventTable/EventTable';
import EventFilter from '../../../../component/events/EventFilter/EventFilter';

const GetEvents = () => {

    const [query, setQuery] = useState({ country: null, active: 'true' });
    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleCountry = (count) => setQuery({ ...query, country: query.country = count });
    const handleChangePage = (page) => setQuery({ ...query, page: page });

    return (
        <div className='getEvents'>
            <Title Icon={StadiumIcon} name='Todos los eventos' />
            <div className='getEventsBtn'>
                <button className='btn btnUE' onClick={() => handleCountry('UY')}>Uruguay</button>
                <button className='btn btnUE' onClick={() => handleCountry('AR')}>Argentina</button>
                <p>{query.country ? query.country : 'Selecciona un país'}</p>
            </div>
            {query.country && <EventFilter query={query} setQuery={setQuery} setEvents={setEvents} setLoading={setLoading} />}
            {events && <EventTable events={events} setEvents={setEvents} setLoading={setLoading} />}
            <Pager users={events} HandleChangePage={handleChangePage} />
            <Load loading={loading} />
        </div>
    );
};

export default GetEvents;