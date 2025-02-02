import { useEffect, useState } from 'react';
import ShiftAlmanacDays from '../ShiftAlmanacDays/ShiftAlamanacDays';

const ShiftCalendar = ({ config, setSelected, nonWorkDays, selected, rooms }) => {

    const [weeks, setWeeks] = useState([]);
    const [today, setToday] = useState(new Date());
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

    const handleDayClick = (day) => {
        if (day.className.includes('prev-month') || day.className.includes('next-month') || day.className.includes('non-work-day')) {
            return;
        };
        setSelected({ day: day.day, month: daysSet[currentMonth], year: today.getFullYear() });
    };

    const getDayInMonth = (date, nonWorkDays = []) => {
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
                const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const dayIndex = date.getDay();
                let isNonWorkDay = config?.days && !config.days.includes(daysOfWeek[dayIndex]) || nonWorkDays.includes(formattedDate);
                if (config.holidays) {
                    if (formatDate(date) >= formatDate(new Date(config.holidaysDate.holdaysOn)) && formatDate(date) <= formatDate(new Date(config.holidaysDate.holdaysOff))) {
                        isNonWorkDay = true;
                    };
                };
                const isToday = day === today.getDate() && month === new Date().getMonth() && year === today.getFullYear();
                if (isBeforeToday(day, month + 1, year)) isNonWorkDay = true;
                const className = `${isNonWorkDay ? ' non-work-day' : 'current-month'}${isToday ? ' today' : ''}${day === selected.day ? ' dayClick' : ''}`;
                return { day, className };
            }),
            ...daysFromNextMonth.map(day => ({ day, className: 'next-month' })),
        ];
        const weeks = [];
        for (let i = 0; i < calendarDays.length; i += 7) weeks.push(calendarDays.slice(i, i + 7));
        return weeks;
    };

    useEffect(() => {
        const newWeeks = getDayInMonth(today, nonWorkDays);
        setWeeks(newWeeks);
        setCurrentMonth(today.toLocaleString('default', { month: 'long' }));
    }, [today, nonWorkDays, selected, rooms]);

    return (
        <div className='shiftCalendar'>
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
        </div>
    );
};

export default ShiftCalendar;

const daysSet = {
    enero: 'january', febrero: 'february', marzo: 'march', abril: 'april', mayo: 'may',
    junio: 'june', julio: 'july', agosto: 'august', septiembre: 'september', octubre: 'october',
    noviembre: 'november', diciembre: 'december'
};

const formatDate = (date) => date.toISOString().split('T')[0];

const isBeforeToday = (day, month, year) => {
    const date = new Date(`${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T00:00:00Z`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date.getTime() < today.getTime();
};