import './shiftBooks.scss';
import Load from '../../utils/Load.jsx';
import { useEffect, useState } from 'react';
import { monthsArray } from '../../../utils/typeShifts.utils.js';
import { getShiftsApi } from '../../../helpers/shift/getShifts.api.js';
import ShiftCalendarWeek from '../calendar/ShiftCalendarWeek/ShiftCalendarWeek.jsx';
import ShiftCalendarMonth from '../calendar/ShiftCalendarMonth/ShiftCalendarMonth.jsx';

const ShiftBooks = ({ userId }) => {

    const [month, setMonth] = useState([monthsArray[new Date().getMonth()]]);
    const [prevMonth, setPrevMonth] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [events, setEvents] = useState([]);
    const [vew, setVew] = useState('weeks');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!areArraysEqual(month, prevMonth)) {
            const fetchData = async () => {
                setLoading(true);
                const response = await getShiftsApi({ uid: userId, month, year });
                if (response.status === 'success') setEvents(response.result);
                else console.error(response);
                setLoading(false);
            }; fetchData();
            setPrevMonth([...month]);
        };
    }, [month]);

    const handleVew = (ind) => setVew(vew === ind ? 'weeks' : ind);

    return (
        <div className='shiftBooks'>

            <section className='shiftBooksButtons'>
                <button className='btn btnGray' style={{ backgroundColor: vew === 'month' ? 'gray' : '' }} onClick={() => handleVew('month')}>Mes</button>
                <button className='btn btnGray' style={{ backgroundColor: vew === 'weeks' ? 'gray' : '' }} onClick={() => handleVew('weeks')}>Semana</button>
                <button className='btn btnGray' style={{ backgroundColor: vew === 'day' ? 'gray' : '' }} onClick={() => handleVew('day')}>Día</button>
                <button className='btn btnGray' style={{ backgroundColor: vew === 'users' ? 'gray' : '' }} onClick={() => handleVew('users')}>Usuario</button>
            </section>

            {vew === 'month' && <ShiftCalendarMonth events={events} month={month} year={year} setMonth={setMonth} />}
            {vew === 'weeks' && <ShiftCalendarWeek events={events} month={month} year={year} setMonth={setMonth} />}

            <Load loading={loading} />
        </div>
    );
};

export default ShiftBooks;

const areArraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((value, index) => value === arr2[index]);
};