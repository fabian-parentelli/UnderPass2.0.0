import './createEvent.scss';
import Load from '../../utils/Load';
import { useEffect, useState } from 'react';
import EventInfo from '../EventInfo/EventInfo';
import EventProgress from '../EventProgress/EventProgress';
import { getConfirmEventApi } from '../../../helpers/event/getEventConfirm.api.js';
import EventImages from '../EventImages/EventImages.jsx';

const CreateEvent = ({ user }) => {

    const lsEvent = localStorage.getItem('event');
    const [progres, setProgres] = useState(20);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
        title: '', category: '', minors: false, tickets: true, userId: user._id, startDate: '', startHour: '',
        endHour: '', description: '', type: true, password: '', guests: ''
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
            <EventProgress progres={progres} setProgres={setProgres} lsEvent={lsEvent} />

            {progres === 20 && <EventInfo setProgres={setProgres} setLoading={setLoading} values={values} setValues={setValues} lsEvent={lsEvent} />}
            {progres === 40 && <EventImages values={values} setValues={setValues} setLoading={setLoading} setProgres={setProgres} /> }
            <Load loading={loading} />
        </div>
    );
};

export default CreateEvent;