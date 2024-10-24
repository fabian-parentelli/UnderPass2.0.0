import './createEvent.scss';
import Load from '../../utils/Load';
import { useEffect, useState } from 'react';
import EventInfo from '../EventInfo/EventInfo';
import EventImages from '../EventImages/EventImages.jsx';
import EventStream from '../EventStream/EventStream.jsx';
import EventProgress from '../EventProgress/EventProgress';
import ConfirmEvent from '../ConfirmEvent/ConfirmEvent.jsx';
import TicketCreate from '../TicketsCreate/TicketsCreate.jsx';
import Eventlocation from '../EventLocation/EventLocation.jsx';
import { getConfirmEventApi } from '../../../helpers/event/getEventConfirm.api.js';

const CreateEvent = ({ user }) => {

    const lsEvent = localStorage.getItem('event');
    const [progres, setProgres] = useState(20);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
        title: '', category: '', minors: false, tickets: true, userId: user._id, startDate: '', startHour: '',
        endHour: '', description: '', typePublic: true, password: '', guests: '', inSite: true, inPerson: true
    });
    useEffect(() => { window.scrollTo(0, 0) }, [progres]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getConfirmEventApi(user._id);
            if (response.status === 'success') setValues(response.result);
            setLoading(false);
        }; if (lsEvent) fetchData();
    }, []);

    return (
        <div className='createEvent'>
            <EventProgress progres={progres} setProgres={setProgres} lsEvent={lsEvent} values={values} />
            {progres === 20 && <EventInfo setProgres={setProgres} setLoading={setLoading} values={values} setValues={setValues} lsEvent={lsEvent} />}
            {progres === 40 && <EventImages values={values} setValues={setValues} setLoading={setLoading} setProgres={setProgres} />}
            {progres === 60 &&
                values.inPerson 
                ? <Eventlocation values={values} setValues={setValues} setLoading={setLoading} setProgres={setProgres} />
                : <EventStream values={values} setValues={setValues} setLoading={setLoading} setProgres={setProgres} />
            }
            {progres === 80 && <TicketCreate values={values} setValues={setValues} setLoading={setLoading} setProgres={setProgres} />}
            {progres === 100 && <ConfirmEvent setProgres={setProgres} setLoading={setLoading} values={values} />}
            <Load loading={loading} />
        </div>
    );
};

export default CreateEvent;