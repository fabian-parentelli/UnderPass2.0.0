import { useState } from 'react';
import EventTableHtml from './EventTableHtml';
import { updActiveEventApi } from '../../../helpers/event/updActiveEvent.api';

const EventTable = ({ events, setEvents, setLoading }) => {

    const [vewImg, setVewImg] = useState({ vew: null, open: false });
    const [vewInfo, setVewInfo] = useState({ vew: null, open: false });
    const [vewTicket, setTicket] = useState({ vew: null, open: false });
    const [vewUser, setVewUser] = useState({ vew: null, open: false });
    const [vewDelete, setVewDelete] = useState({ vew: null, open: false });
    const [vewStream, setVewStream] = useState({ vew: null, open: false });

    const closedImg = () => setVewImg({ vew: null, open: false });
    const openImg = (id) => setVewImg({ vew: id, open: true });

    const closedInfo = () => setVewInfo({ vew: null, open: false });
    const openInfo = (id) => setVewInfo({ vew: id, open: true });

    const closedTicket = () => setTicket({ vew: null, open: false });
    const openTicket = (id) => setTicket({ vew: id, open: true });

    const closedUser = () => setVewUser({ vew: null, open: false });
    const openUser = (id) => setVewUser({ vew: id, open: true });

    const closedDelete = () => setVewDelete({ vew: null, open: false });
    const openDelete = (id) => setVewDelete({ vew: id, open: true });

    const closedStream = () => setVewStream({ vew: null, open: false });
    const openStream = (id) => setVewStream({ vew: id, open: true });

    const handleActive = async (id) => {
        setLoading(true);
        const response = await updActiveEventApi(id);
        if (response.status === 'success') {
            const data = { ...events };
            const index = data.docs.findIndex(i => i._id === response.result._id);
            data.docs[index] = response.result;
            setEvents(data);
        } else console.error(response.error);
        setLoading(false);
    };

    return (
        <EventTableHtml
            events={events}
            closedImg={closedImg}
            openImg={openImg}
            vewImg={vewImg}
            setEvents={setEvents}
            vewInfo={vewInfo}
            closedInfo={closedInfo}
            openInfo={openInfo}
            vewTicket={vewTicket}
            closedTicket={closedTicket}
            openTicket={openTicket}
            handleActive={handleActive}
            vewUser={vewUser}
            closedUser={closedUser}
            openUser={openUser}
            vewDelete={vewDelete}
            closedDelete={closedDelete}
            openDelete={openDelete}
            vewStream={vewStream}
            openStream={openStream}
            closedStream={closedStream}
        />
    );
};

export default EventTable;