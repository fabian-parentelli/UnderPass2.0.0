import './shiftCalendarUser.scss';
import { useEffect, useState } from 'react';
import ShiftFrom from '../../ShiftForm/ShiftForm.jsx'
import AutoComplete from '../../../utils/AutoComplete.jsx';
import { getShiftsApi } from '../../../../helpers/shift/getShifts.api.js';
import { getShiftCustomerByUserIdApi } from '../../../../helpers/shiftCustomer/getShiftCustomerByUserId.api.js';

const ShiftCalendarUser = ({ userId, setLoading }) => {

    const [events, setEvents] = useState([]);
    const [data, setData] = useState([]);
    const [message, setMessage] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getShiftCustomerByUserIdApi(userId);
            if (response.status === 'success') {
                const result = response.result.map((res) => {
                    return {
                        label: res.name,
                        data: res._id
                    };
                });
                setData(result);
            } else console.error(response);
        }; fetchData();
    }, []);

    const handleChange = async (e, newValue) => {
        setLoading(true);
        if (newValue) {
            setUser(newValue.label);
            setMessage(false);
            const response = await getShiftsApi({ uid: userId, customer: newValue.data });
            if (response.status === 'success') {
                if (response.result.length > 0) setEvents(response.result);
                else {
                    setEvents([]);
                    setMessage(true);
                };
            } else console.error(response);
        } else { setMessage(false); setEvents([]) };
        setLoading(false);
    };

    return (
        <div className='shiftCalendarUser'>
            <div className='shiftCalendarUserText'>
                <AutoComplete data={data} handleChange={handleChange} />
            </div>

            <section className='shiftCalendarUserSect'>
                {events && events.length > 0 &&
                    <ShiftFrom shifts={events} />
                }
                {message && user &&
                    <p className='shiftCalendarUserP'>{user} no tiene reservaciónes activas</p>
                }
            </section>
        </div>
    );
};

export default ShiftCalendarUser;