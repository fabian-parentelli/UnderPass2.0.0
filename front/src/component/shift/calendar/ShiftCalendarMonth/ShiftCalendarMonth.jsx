import './shiftCalendarMonth.scss';
import { useState, useEffect } from 'react';
import ShiftForm from '../../ShiftForm/ShiftForm';
import ShiftAlmanacDays from '../../ShiftAlmanac/ShiftAlmanacDays/ShiftAlamanacDays';

const ShiftCalendarMonth = ({ events, month: monthArray, year: years, setMonth }) => {

    const [weeks, setWeeks] = useState([]);
    const [today, setToday] = useState(new Date());
    const [currentMonth, setCurrentMonth] = useState(today.toLocaleString('default', { month: 'long' }));
    const [shifts, setShifts] = useState([]);

    useEffect(() => { 
        setMonth([today.toLocaleString('en-US', { month: 'long' }).toLowerCase()]);
    }, []);

    const goToPreviousMonth = () => {
        const newDate = new Date(today);
        newDate.setMonth(today.getMonth() - 1);
        setToday(newDate);
        setMonth([newDate.toLocaleString('en-US', { month: 'long' }).toLowerCase()]);
    };

    const goToNextMonth = () => {
        const newDate = new Date(today);
        newDate.setMonth(today.getMonth() + 1);
        setToday(newDate);
        setMonth([newDate.toLocaleString('en-US', { month: 'long' }).toLowerCase()]);
    };

    const handleDayClick = (day) => {
        if (day.className.includes('eventss')) {
            const chooses = events.filter(event => {
                return (
                    event.day.day === day.day &&
                    monthArray.some(m => m.toLowerCase() === event.day.month.toLowerCase()) &&
                    event.day.year === years
                );
            });
            if (chooses) setShifts(chooses);
        };
    };

    const getDayInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const lastDay = new Date(year, month + 1, 0).getDate();
        const prevLastDay = new Date(year, month, 0).getDate();
        const firstDayIndex = new Date(year, month, 1).getDay();
        const daysFromPrevMonth = Array.from({ length: firstDayIndex }, (_, i) => prevLastDay - firstDayIndex + 1 + i);
        const daysFromCurrentMonth = Array.from({ length: lastDay }, (_, i) => i + 1);
        const daysToShow = 42 - (daysFromPrevMonth.length + daysFromCurrentMonth.length);
        const daysFromNextMonth = Array.from({ length: daysToShow }, (_, i) => i + 1);
        const calendarDays = [
            ...daysFromPrevMonth.map(day => ({ day, className: 'prev-month gray' })), 
            ...daysFromCurrentMonth.map((day, index) => {
                const isToday = day === today.getDate() && month === new Date().getMonth() && year === today.getFullYear();
                let className = '';
                const isEvent = events.some(event => event.day.day === day && event.day.month === monthArray[0] && event.day.year === years);
                if (isToday) className = 'today';
                if (isEvent) className += ' eventss';
                return { day, className };
            }),
            ...daysFromNextMonth.map(day => ({ day, className: 'next-month gray' })), 
        ];
        const weeks = [];
        for (let i = 0; i < calendarDays.length; i += 7) {
            weeks.push(calendarDays.slice(i, i + 7));
        };
        return weeks;
    };

    useEffect(() => {
        const newWeeks = getDayInMonth(today);
        setWeeks(newWeeks);
        setCurrentMonth(today.toLocaleString('default', { month: 'long' }));
    }, [today, events]);

    return (
        <div className='shiftCalendarMonth'>

            <section className='shiftCalendarMonthCalendar'>
                {weeks &&
                    <ShiftAlmanacDays
                        weeks={weeks}
                        goToPreviousMonth={goToPreviousMonth}
                        goToNextMonth={goToNextMonth}
                        today={today}
                        currentMonth={currentMonth}
                        handleDayClick={handleDayClick}
                    />
                }
            </section>

            <section className='shiftCalendarMonthEvents'>
                {shifts.length > 0 
                    ? <ShiftForm shifts={shifts} />
                    : <p>Selecciona un día que contenga reservas.</p>
                }
            </section>

        </div>
    );
};

export default ShiftCalendarMonth;