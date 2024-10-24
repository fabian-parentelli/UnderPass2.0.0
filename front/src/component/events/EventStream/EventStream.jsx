import './eventStream.scss';
import { useState } from 'react';

const EventStream = ({ values, setValues, setLoading, setProgres }) => {

    const [links, setLinks] = useState([]);

    // Crer inputs para agragar links .... 

    return (
        <div className='eventStream'>
            <h3>Enlaces del evento.</h3>

        </div>
    );
};

export default EventStream;