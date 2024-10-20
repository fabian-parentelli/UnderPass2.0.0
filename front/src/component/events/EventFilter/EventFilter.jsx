import './eventFilter.scss';
import { useEffect, useState } from 'react';
import { getEventsApi } from '../../../helpers/event/getEvents.api.js';
import EventFilterLocation from './EventFilterLocation.jsx';

const EventFilter = ({ query, setQuery, setEvents, setLoading }) => {

    const [values, setValues] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getEventsApi(query);
            if (response.status === 'success') {
                setEvents(response.result);
                setValues(response.result.docs);
            } else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, [query]);

    const handleChangue = (e) => setQuery({ ...query, [e.target.name]: e.target.value });

    // console.log(query);

    return (
        <div className='eventFilter'>
            <div>
                <select name="category" onChange={handleChangue} >
                    <option value="">Elige una categoría</option>
                    {categorys.map((cat, i) => (
                        <option key={i} value={cat.val}>{cat.name}</option>
                    ))}
                </select>
            </div>
           {values && <EventFilterLocation values={values} />}
            
        </div>
    );
};

export default EventFilter;

const categorys = [
    { val: 'concert', name: 'Concierto' },
    { val: "theater", name: 'Teatro' },
    { val: 'filmmaker', name: 'Filmmaker' },
    { val: 'standup', name: 'Stand Up' },
    { val: 'Conference', name: 'conferencia' },
    { val: 'art', name: 'Artística' },
    { val: 'dance', name: 'Danza' },
];