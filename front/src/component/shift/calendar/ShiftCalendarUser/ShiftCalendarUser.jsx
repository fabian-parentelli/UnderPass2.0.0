import './shiftCalendarUser.scss';
import { useEffect, useState } from 'react';
import AutoComplete from '../../../utils/AutoComplete.jsx';
import { getShiftsApi } from '../../../../helpers/shift/getShifts.api.js';
import { getShiftCustomerByUserIdApi } from '../../../../helpers/shiftCustomer/getShiftCustomerByUserId.api.js';

const ShiftCalendarUser = ({ userId }) => {

    const [events, setEvents] = useState([]);
    const [data, setData] = useState([]);
    const [query, setQuery] = useState({ uid: userId });

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

    const handleChange = (e, newValue) => console.log(newValue);

    return (
        <div className='shiftCalendarUser'>
            <div className='shiftCalendarUserText'>
                <AutoComplete data={data} handleChange={handleChange} />
            </div>
        </div>
    );
};

export default ShiftCalendarUser;

// Esty acá seguir trabajando en en ver los eventos filtrando por usuario......