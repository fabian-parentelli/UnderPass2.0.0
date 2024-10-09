import './createEvent.scss';
import Load from '../../utils/Load';
import { useEffect, useState } from 'react';
import EventInfo from '../EventInfo/EventInfo';
import EventProgress from '../EventProgress/EventProgress';
import { getConfirmEventApi } from '../../../helpers/event/getEventConfirm.api';

const CreateEvent = ({ user }) => {

    const [progres, setProgres] = useState(20);
    const [loading, setLoading] = useState(false);

    useEffect(() => { window.scrollTo(0, 0) }, [progres]);

    useEffect(() => {
        const fetchData = async () => {            
            const response = await getConfirmEventApi(user._id);
            console.log(response);
              // estoy aca ahora tengo que completar 
              // los datos del evento y verificar cuando hay evento y cuando no  

        }; fetchData();
    }, []);

    return (
        <div className='createEvent'>
            <EventProgress progres={progres} setProgres={setProgres} />
            {progres === 20 && <EventInfo userId={user._id} setProgres={setProgres} setLoading={setLoading} />}
            <Load loading={loading} />
        </div>
    );
};

export default CreateEvent;