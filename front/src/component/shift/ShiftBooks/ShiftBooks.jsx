import './shiftBooks.scss';
import { useEffect, useState } from 'react';
import { monthsArray } from '../../../utils/typeShifts.utils.js';
import { getShiftsApi } from '../../../helpers/shift/getShifts.api.js';
import ShiftCalendarWeek from '../calendar/ShiftCalendarWeek/ShiftCalendarWeek.jsx';

const ShiftBooks = ({ userId }) => {

    const [month, setMonyh] = useState(monthsArray[new Date().getMonth()]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [events, setEvents] = useState([]);
    const [vew, setVew] = useState('weeks');

    useEffect(() => {
        const fetchData = async () => {
            const response = await getShiftsApi({ uid: userId, month, year });
            if (response.status === 'success') setEvents(response.result);
            else console.error(response);
        }; fetchData();
    }, []);

    const handleVew = (ind) => setVew(vew === ind ? 'weeks' : ind);

    return (
        <div className='shiftBooks'>

            <section className='shiftBooksButtons'>
                <button className='btn btnGray' style={{ backgroundColor: vew === 'month' ? 'gray' : '' }} onClick={() => handleVew('month')}>Mes</button>
                <button className='btn btnGray' style={{ backgroundColor: vew === 'weeks' ? 'gray' : '' }} onClick={() => handleVew('weeks')}>Semana</button>
                <button className='btn btnGray' style={{ backgroundColor: vew === 'day' ? 'gray' : '' }} onClick={() => handleVew('day')}>Día</button>
                <button className='btn btnGray' style={{ backgroundColor: vew === 'users' ? 'gray' : '' }} onClick={() => handleVew('users')}>Usuario</button>
            </section>

            <section>
                <div>

                </div>
            </section>

            {vew === 'weeks' && <ShiftCalendarWeek events={events} month={month} year={year} />}

        </div>
    );
};

export default ShiftBooks;