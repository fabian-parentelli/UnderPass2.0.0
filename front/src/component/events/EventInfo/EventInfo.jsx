import './eventInfo.scss';
import { useState } from 'react';
import EventInfoTable from "./EventInfoTable";
import { newEventApi } from "../../../helpers/event/newEvent.api";
import { updEventApi } from "../../../helpers/event/updEvent.api";
import UnderEventsLog from "../../fonts/UnderEventsLog/UnderEventsLog";

const EventInfo = ({ setProgres, setLoading, values, setValues, lsEvent }) => {

    const [isChange, setIsChange] = useState(false);

    const handleChangue = (e) => { setValues({ ...values, [e.target.name]: e.target.value }); setIsChange(true) };
    const handleMinors = (e) => { setValues({ ...values, minors: e.target.checked }); setIsChange(true) };
    const handleTicket = (e) => { setValues({ ...values, tickets: e.target.checked }); setIsChange(true) };
    const handleType = (e) => { setValues({ ...values, typePublic: e.target.checked }); setIsChange(true) };
    const handleInSite = (e) => { setValues({ ...values, inSite: e.target.checked }); setIsChange(true) };
    const handleInPerson = (e) => { setValues({ ...values, inPerson: e.target.checked }); setIsChange(true) };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (isChange) {
            if (!lsEvent) {
                const response = await newEventApi(values);
                if (response.status === 'success') {
                    localStorage.setItem('event', response.result._id);
                    setValues(response.result);
                    setProgres(40);
                } else console.error(response.error);
            } else {
                const response = await updEventApi(values);
                if (response.status === 'success') {
                    setValues(response.result);
                    setProgres(40);
                };
            };
        } else setProgres(40);
        setLoading(false);
    };

    return (
        <div className='eventInfo'>
            <EventInfoTable
                values={values}
                handleChangue={handleChangue}
                handleSubmit={handleSubmit}
                handleMinors={handleMinors}
                handleTicket={handleTicket}
                handleType={handleType}
                lsEvent={lsEvent}
                isChange={isChange}
                handleInSite={handleInSite}
                handleInPerson={handleInPerson}
            />

            <UnderEventsLog size={3} />
        </div>
    );
};

export default EventInfo;