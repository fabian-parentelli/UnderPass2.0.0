import { useState } from "react";
import EventInfoTable from "./EventInfoTable";
import { newEventApi } from "../../../helpers/event/newEvent.api";

const EventInfo = ({ userId, setProgres, setLoading }) => {

    const [values, setValues] = useState({
        title: '', category: '', minors: false, tickets: true, userId: userId, startDate: '', startHour: '',
        endHour: '', description: '', type: true, password: '', guests: ''
    });

    const handleChangue = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    const handleMinors = (e) => setValues({ ...values, minors: e.target.checked });
    const handleTicket = (e) => setValues({ ...values, tickets: e.target.checked });
    const handleType = (e) => setValues({ ...values, type: e.target.checked });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await newEventApi(values);
        if(response.status === 'success') setProgres(40);
        else console.error(response.error);
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
            />
        </div>
    );
};

export default EventInfo;