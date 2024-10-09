import './eventInfo.scss';
import EventInfoTable from "./EventInfoTable";
import { newEventApi } from "../../../helpers/event/newEvent.api";
import { updEventApi } from "../../../helpers/event/updEvent.api";
import UnderEventsLog from "../../fonts/UnderEventsLog/UnderEventsLog";

const EventInfo = ({ setProgres, setLoading, values, setValues, lsEvent }) => {

    const handleChangue = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    const handleMinors = (e) => setValues({ ...values, minors: e.target.checked });
    const handleTicket = (e) => setValues({ ...values, tickets: e.target.checked });
    const handleType = (e) => setValues({ ...values, type: e.target.checked });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!lsEvent) {
            const response = await newEventApi(values);
            if (response.status === 'success') {
                localStorage.setItem('event', response.result._id);
                setProgres(40);
            } else console.error(response.error);
        } else {
            const response = await updEventApi(values);
            if(response.status === 'success') {
                setValues(response.result);
                setProgres(40);
            };
        };
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
            />

            <UnderEventsLog size={3} />
        </div>
    );
};

export default EventInfo;