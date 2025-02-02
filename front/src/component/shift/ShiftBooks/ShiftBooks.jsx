import './shiftBooks.scss';
import Load from '../../utils/Load.jsx';
import { useEffect, useState } from 'react';
import { monthsArray } from '../../../utils/typeShifts.utils.js';
import { getShiftsApi } from '../../../helpers/shift/getShifts.api.js';
import ShiftCalendarDay from '../calendar/ShiftCalendarDay/ShiftCalendarDay.jsx';
import ShiftCalendarWeek from '../calendar/ShiftCalendarWeek/ShiftCalendarWeek.jsx';
import ShiftCalendarUser from '../calendar/ShiftCalendarUser/ShiftCalendarUser.jsx';
import ShiftCalendarMonth from '../calendar/ShiftCalendarMonth/ShiftCalendarMonth.jsx';
import ShiftPostponePanel from '../calendar/ShiftPostponePanel/ShiftPostponePanel.jsx';
import { getShiftconfApi } from '../../../helpers/shiftsconf/getShiftconf.api.js';

const ShiftBooks = ({ userId }) => {

    const [month, setMonth] = useState([monthsArray[new Date().getMonth()]]);
    const [prevMonth, setPrevMonth] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [events, setEvents] = useState([]);
    const [vew, setVew] = useState('weeks');
    const [loading, setLoading] = useState(false);
    const [hourConfig, setHourConfig] = useState(Array.from({ length: 24 }, (_, i) => `${i}:00`));

    useEffect(() => {
        if (!areArraysEqual(month, prevMonth)) {
            const fetchData = async () => {
                setLoading(true);
                const response = await getShiftsApi({ uid: userId, month, year });
                if (response.status === 'success') setEvents(response.result);
                else console.error(response);
                // Esto esta mal pero es por ahora.....
                const confResponse = await getShiftconfApi({ userId: userId });
                if(confResponse.status === 'success') {
                    const { hour } = confResponse.result.docs[0];
                    const timeArray = generateTimeArray(hour.startHour, hour.endHour, hour.fractionHour);
                    setHourConfig(timeArray);  
                };
                // Esto, tengo que trabajar en traer todo en una solo petición, trabajar ...
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
                <button className='btn btnGray' style={{ backgroundColor: vew === 'postpone' ? 'gray' : '' }} onClick={() => handleVew('postpone')}>Pospuesto</button>
            </section>

            {vew === 'month' && <ShiftCalendarMonth events={events} month={month} year={year} setMonth={setMonth} setYear={setYear} />}
            {vew === 'weeks' && <ShiftCalendarWeek events={events} month={month} year={year} setMonth={setMonth} setYear={setYear} hourConfig={hourConfig} />}
            {vew === 'day' && <ShiftCalendarDay events={events} month={month} year={year} setMonth={setMonth} setYear={setYear} hourConfig={hourConfig} />}
            {vew === 'users' && <ShiftCalendarUser userId={userId} setLoading={setLoading} />}
            {vew === 'postpone' && <ShiftPostponePanel userId={userId} setLoading={setLoading} />}

            <Load loading={loading} />
        </div>
    );
};

export default ShiftBooks;

const areArraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((value, index) => value === arr2[index]);
};

const generateTimeArray = (startHour, endHour, fractionHour) => {
    const result = [];
    let currentTime = new Date(`1970-01-01T${startHour}`);
    let endTime = new Date(`1970-01-01T${endHour}`);
    if (endTime < currentTime) {
        endTime.setDate(endTime.getDate() + 1);
    };
    while (currentTime <= endTime) {
        const hours = currentTime.getHours().toString().padStart(2, '0');
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        result.push(`${hours}:${minutes}`);
        currentTime.setMinutes(currentTime.getMinutes() + fractionHour);
    };
    return result;
};