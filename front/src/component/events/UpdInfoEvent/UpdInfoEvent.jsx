import './updEventInfo.scss';
import { useState } from 'react';
import { Spinner } from 'faradaycomp';
import UpdInfoEventHtml from './UpdInfoEventHtml';
import { updEventApi } from '../../../helpers/event/updEvent.api.js';

const UpdEventInfo = ({ event, closedInfo, setEvents, events }) => {

    const [values, setValues] = useState(event);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    const handleMinors = (e) => setValues({ ...values, minors: e.target.checked });
    const handleTicket = (e) => setValues({ ...values, tickets: e.target.checked });
    const handleType = (e) => setValues({ ...values, typePublic: e.target.checked });
    const handleLocation = (e) => setValues({ ...values, location: { ...values.location, [e.target.name]: e.target.value } });
    const handleCoordenates = (e) => {
        setValues({
            ...values, location: {
                ...values.location, coordinates: {
                    ...values.location.coordinates, [e.target.name]: e.target.value
                }
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await updEventApi(values);
        if (response.status === 'success') {
            const data = { ...events };
            const index = data.docs.findIndex(i => i._id == response.result._id);
            data.docs[index] = response.result;
            setEvents(data);
            closedInfo();
        } else console.error(response.error);
        setLoading(false);
    };

    return (
        <>
            {loading ? <div><Spinner color={'#383f84'} /> </div>
                : <UpdInfoEventHtml
                    values={values}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleMinors={handleMinors}
                    handleTicket={handleTicket}
                    handleType={handleType}
                    handleLocation={handleLocation}
                    handleCoordenates={handleCoordenates}
                    setValues={setValues}
                />
            }
        </>
    );
};

export default UpdEventInfo;