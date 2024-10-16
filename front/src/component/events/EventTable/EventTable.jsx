import { useState } from 'react';
import EventTableHtml from './EventTableHtml';

const EventTable = ({ events, setEvents, setLoading }) => {

    const [vewImg, setVewImg] = useState({ vew: null, open: false });

    const closedImg = () => setVewImg({ vew: null, open: false });
    const openImg = (id) => setVewImg({ vew: id, open: true });

    return (
        <EventTableHtml
            events={events}
            closedImg={closedImg}
            openImg={openImg}
            vewImg={vewImg}
            setLoading={setLoading}
            setEvents={setEvents}
        />
    );
};

export default EventTable;