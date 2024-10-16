import { useEffect } from 'react';
import './eventFilter.scss';
import { getEventsApi } from '../../../helpers/event/getEvents.api';

const EventFilter = ({ query, setQuery, setEvents, setLoading }) => {

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getEventsApi(query);
            if (response.status === 'success') setEvents(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);

    return (
        <div className='eventFilter'>
            EventFilter
        </div>
    );
};

export default EventFilter;