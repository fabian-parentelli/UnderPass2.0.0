import './eventSite.scss';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import CheckBoxes2 from '../../../utils/CheckBoxes2';
import { getEventsApi } from '../../../../helpers/event/getEvents.api.js';

const EventSite = ({ values, setValues }) => {

    const [events, setEvents] = useState([]);
    const [selected, setSelected] = useState(values.events || []);

    const handleEvent = (e) => setValues({ ...values, isEvent: e.target.checked });

    useEffect(() => { localStorage.setItem('to', 'description') }, []);
    useEffect(() => {
        const fetchData = async () => {
            const response = await getEventsApi({ userid: values.userId });
            if (response.status === 'success') {
                setEvents(response.result.docs);
            } else console.error(response.error);
        }; if (values.isEvent) fetchData();
    }, [values.isEvent]);

    useEffect(() => { setValues({ ...values, events: [...selected] }) }, [selected]);

    return (
        <div className='eventSite'>

            <section className='siteUpdateEventSectA'>
                <label>Eventos:</label>
                <div className='eventSiteSwitch'>
                    <p>NO</p>
                    <Switch checked={values.isEvent} onChange={handleEvent} />
                    <p>SI</p>
                </div>
                <p className='pgray'>Habilita la venta de entradas</p>
            </section>

            <div className='line eventSiteLine'></div>

            {values.isEvent && events.length > 0 &&
                <section className='siteUpdateEventBoxes'>
                    <p className='eventSiteHelp'>Eventos Disponibles:</p>
                    <CheckBoxes2 labels={events} setType={setSelected} multiselect={true} selecteds={selected} />
                </section>
            }
        </div>
    );
};

export default EventSite;