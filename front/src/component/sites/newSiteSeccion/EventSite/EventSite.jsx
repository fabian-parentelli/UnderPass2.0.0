import './eventSite.scss';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import CheckBoxes2 from '../../../utils/CheckBoxes2';
import { getEventsApi } from '../../../../helpers/event/getEvents.api';

const EventSite = ({ values, setValues }) => {

    const [events, setEvents] = useState([]);
    const [selected, setSelected] = useState([]);

    const handleEvent = (e) => setValues({ ...values, isEvent: e.target.checked });

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

            <section className='eventSiteSect1'>
                <label>Eventos:</label>
                <div className='eventSiteSwitch'>
                    <p>NO</p>
                    <Switch value={values.isEvent} onChange={handleEvent} />
                    <p>SI</p>
                </div>
                <p className='eventSiteHelp'>Habilita la venta de entradas</p>
            </section>

            {values.isEvent && events.length > 0 &&
                <section>
                    <p className='eventSiteHelp'>Eventos Disponibles:</p>
                    <CheckBoxes2 labels={events} setType={setSelected} multiselect={true} />
                </section>
            }
        </div>
    );
};

export default EventSite;