import { useState } from 'react';
import EventTableHtml from './EventTableHtml';

const EventTable = ({ events, setEvents, setLoading }) => {

    const [vewImg, setVewImg] = useState({ vew: null, open: false });
    const [vewInfo, setVewInfo] = useState({ vew: null, open: false });
    const [vewTicket, setTicket] = useState({ vew: null, open: false });

    const closedImg = () => setVewImg({ vew: null, open: false });
    const openImg = (id) => setVewImg({ vew: id, open: true });

    const closedInfo = () => setVewInfo({ vew: null, open: false });
    const openInfo = (id) => setVewInfo({ vew: id, open: true });
    
    const closedTicket = () => setTicket({ vew: null, open: false });
    const openTicket = (id) => setTicket({ vew: id, open: true });

    return (
        <EventTableHtml
            events={events}
            closedImg={closedImg}
            openImg={openImg}
            vewImg={vewImg}
            setLoading={setLoading}
            setEvents={setEvents}
            vewInfo={vewInfo}
            closedInfo={closedInfo}
            openInfo={openInfo}
            vewTicket={vewTicket}
            closedTicket={closedTicket}
            openTicket={openTicket}
        />
    );
};

export default EventTable;