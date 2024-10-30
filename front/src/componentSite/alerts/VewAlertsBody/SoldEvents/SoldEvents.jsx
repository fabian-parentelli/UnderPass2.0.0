import './soldEvents.scss';
import { useEffect, useState } from 'react';
import { getEventByIdApi } from '../../../../helpers/event/getEventById.api.js';

const SoldEvents = ({ id, setloading }) => {

    const [event, setEvent] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getEventByIdApi(id);
            if (response.status === 'success') setEvent(response.result);

        }; fetchData();
    }, []);

    return (
        <div className='soldEvents'>
            SoldEvents
        </div>
    );
};

export default SoldEvents;