import './shiftCalendarWeek.scss';
import { daysOfWeek } from '../../../../utils/typeShifts.utils.js';
import { useState } from 'react';

const ShiftCalendarWeek = ({ events, month, year }) => {

    const [weekOffset, setWeekOffset] = useState(0);
    const weekDays = getWeekDays(new Date(), weekOffset);

    console.log(events);
    

    const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);

    const isEventInCell = (hour, day) => {
        if (events && events.length > 0) {
            return events.some(event =>
                event.day.day === day &&
                event.day.month.toLowerCase() === month.toLowerCase() &&
                event.day.year === year &&
                event.hour.includes(hour)
            );
        }
        return false;
    };

    return (
        <div className="shiftCalendarWeek">
            <button onClick={() => setWeekOffset(weekOffset - 1)}>Semana Anterior</button>
            <button onClick={() => setWeekOffset(weekOffset + 1)}>Semana Siguiente</button>

            <div className="shiftCalendarWeekHeader">
                <p>Hora</p>
                {weekDays.map((day, ind) => (
                    <div key={ind} className="shiftCalendarWeekDay">
                        <p>{day.getDate()}</p>
                        <p>{day.toLocaleString('default', { weekday: 'long' })}</p>
                    </div>
                ))}
            </div>

            <div className="shiftCalendarWeekBody">
                {hours.map((hour, hourIndex) => (
                    <div key={hourIndex} className="shiftCalendarWeekBodyHour">
                        <p>{hour}</p>
                        <div className="shiftCalendarWeekCells">
                            {weekDays.map((day, dayIndex) => {
                                const isSelected = isEventInCell(hour, day.getDate());
                                return (
                                    <div
                                        key={dayIndex}
                                        className={`shiftCalendarWeekCell ${isSelected ? 'shiftCalendarWeekCellEvent' : ''}`}
                                    >
                                        {isSelected &&
                                            <span style={{fontSize: '8px'}}>{events.find(event => event.day.day === day.getDate() &&
                                                event.day.month.toLowerCase() === month.toLowerCase() &&
                                                event.day.year === year &&
                                                event.hour.includes(hour)).customer}
                                                {/* Aca aponer los datos de como hacerlo */}
                                            </span>
                                        }
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShiftCalendarWeek;

const getWeekDays = (date, shift = 0) => {
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = (day === 0 ? -6 : 1) - day;
    startOfWeek.setDate(startOfWeek.getDate() + diff);
    startOfWeek.setDate(startOfWeek.getDate() + (shift * 7));
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
        const weekDay = new Date(startOfWeek);
        weekDay.setDate(startOfWeek.getDate() + i);
        weekDays.push(weekDay);
    }
    return weekDays;
};
