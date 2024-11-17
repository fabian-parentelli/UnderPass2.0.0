import './siteUpdateEvent.scss';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import CheckBoxes2 from '../../../utils/CheckBoxes2';
import { getEventsApi } from '../../../../helpers/event/getEvents.api.js';

const SiteUpdateEvent = ({ values, setValues, handleSubmit }) => {

    const [events, setEvents] = useState([]);
    const [selected, setSelected] = useState(values.events || []);

    const handleEvent = (e) => setValues({ ...values, isEvent: e.target.checked });
    useEffect(() => { setValues({ ...values, events: selected }) }, [selected])

    useEffect(() => {
        const fetchData = async () => {
            const response = await getEventsApi({ userid: values.userId });
            if (response.status === 'success') {
                setEvents(response.result.docs);
            } else console.error(response.error);
        }; fetchData();
    }, [values.isEvent]);

    return (
        <form className='siteUpdateEvent' onSubmit={handleSubmit}>

            <section className='siteUpdateEventSectA'>
                <label>Eventos:</label>
                <div className='eventSiteSwitch'>
                    <p>NO</p>
                    <Switch checked={values.isEvent} onChange={handleEvent} />
                    <p>SI</p>
                </div>
                <p className='pgray'>Habilita la venta de entradas</p>
            </section>

            {values.isEvent && events.length > 0 &&
                <section className='siteUpdateEventBoxes'>
                    <p className='eventSiteHelp'>Eventos Disponibles:</p>
                    <CheckBoxes2 labels={events} setType={setSelected} multiselect={true} selecteds={selected} />
                </section>
            }

            <button className='btn btnUS'>Actualizar</button>

        </form>
    );
};

export default SiteUpdateEvent;