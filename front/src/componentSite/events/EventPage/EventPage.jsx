import './eventPage.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EventPageHtml from './EventPageHtml.jsx';
import Load from '../../../component/utils/Load.jsx';
import { getEventByIdApi } from '../../../helpers/event/getEventById.api.js';

const EventPage = () => {

    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getEventByIdApi(id);
            if (response.status === 'success') setEvent(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, [id]);

    return (
        <div className='eventPageMaster'>
            {event && <EventPageHtml event={event} />}
            <Load loading={loading} />
        </div>
    );
};

export default EventPage;