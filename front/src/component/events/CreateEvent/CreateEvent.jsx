import './createEvent.scss';
import { useState } from 'react';
import EventProgress from '../EventProgress/EventProgress';

const CreateEvent = ({ user }) => {

    const [progres, setProgres] = useState(25);

    return (
        <div className='createEvent'>
            <EventProgress progres={progres} setProgres={setProgres} />
        </div>
    );
};

export default CreateEvent;