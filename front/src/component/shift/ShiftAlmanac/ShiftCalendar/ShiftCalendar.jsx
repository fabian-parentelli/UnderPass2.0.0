import './shiftCalendar.scss';
import { useEffect, useState } from 'react';
import ShiftAlmanacDays from '../ShiftAlmanacDays/ShiftAlamanacDays';

const ShiftCalendar = ({ config }) => {

    const [today, setToday] = useState(new Date());
    const [weeks, setWeeks] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(today.toLocaleString('default', { month: 'long' }));

    const goToPreviousMonth = () => {
        const newDate = new Date(today);
        newDate.setMonth(today.getMonth() - 1);
        setToday(newDate);
    };

    const goToNextMonth = () => {
        const newDate = new Date(today);
        newDate.setMonth(today.getMonth() + 1);
        setToday(newDate);
    };

    const getDayInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const lastDay = new Date(year, month + 1, 0).getDate();
        const prevLastDay = new Date(year, month, 0).getDate();
        const firstDayIndex = new Date(year, month, 1).getDay();
        const daysFromPrevMonth = Array.from(
            { length: firstDayIndex },
            (_, i) => prevLastDay - firstDayIndex + 1 + i
        );
        const daysFromCurrentMonth = Array.from({ length: lastDay }, (_, i) => i + 1);
        const daysToShow = 42 - (daysFromPrevMonth.length + daysFromCurrentMonth.length);
        const daysFromNextMonth = Array.from({ length: daysToShow }, (_, i) => i + 1);
        const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

        const calendarDays = [
            ...daysFromPrevMonth.map(day => ({ day, className: 'prev-month' })),
            ...daysFromCurrentMonth.map((day, index) => {
                const date = new Date(year, month, day);
                const dayIndex = date.getDay();
                const isNonWorkDay = config?.days && !config.days.includes(daysOfWeek[dayIndex]);
                const isToday = day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
                const className = `current-month${isNonWorkDay ? ' non-work-day' : ''}${isToday ? ' today' : ''}`;
                return { day, className };
            }),
            ...daysFromNextMonth.map(day => ({ day, className: 'next-month' })),
        ];
        const weeks = [];
        for (let i = 0; i < calendarDays.length; i += 7) weeks.push(calendarDays.slice(i, i + 7));
        return weeks;
    };

    useEffect(() => {
        const newWeeks = getDayInMonth(today);
        setWeeks(newWeeks);
        setCurrentMonth(today.toLocaleString('default', { month: 'long' }));
    }, [today]);

    return (
        <div className='shiftCalendar'>
            {weeks &&
                <ShiftAlmanacDays
                    weeks={weeks}
                    goToPreviousMonth={goToPreviousMonth}
                    goToNextMonth={goToNextMonth}
                    today={today}
                    currentMonth={currentMonth}
                />
            }
        </div>
    );
};

export default ShiftCalendar;