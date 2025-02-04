import './shiftCalendarWeek.scss';
import ShiftForm from '../../ShiftForm/ShiftForm.jsx';
import { useEffect, useState, Fragment } from 'react';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ModalCustom from '../../../utils/ModalCustom/ModalCustom.jsx';
import { monthsArraySpanish } from '../../../../utils/typeShifts.utils.js';

const ShiftCalendarWeek = ({ events, month, year, setMonth, setYear, hourConfig }) => {

    const [weekOffset, setWeekOffset] = useState(0);
    const [modal, setModal] = useState({ open: false, vew: null, data: [] });
    const weekDays = getWeekDays(new Date(), weekOffset);

    const isEventInCell = (hour, day) => {
        if (events && events.length > 0) {
            return events.some(event =>
                event.day.day === day &&
                month.some(m => m.toLowerCase() === event.day.month.toLowerCase()) &&
                year.some(y => y == event.day.year) &&
                event.hour.includes(hour)
            );
        };
        return false;
    };

    const handleOpenModal = (day, hour, dayIndex) => {
        if (events && events.length > 0) {
            const chooses = events.filter(event => {
                return (
                    event.day.day === day.getDate() &&
                    month.some(m => m.toLowerCase() === event.day.month.toLowerCase()) &&
                    year.some(y => y == event.day.year) &&
                    event.hour.includes(hour)
                );
            });
            setModal({ open: true, vew: dayIndex, data: chooses });
        };
    };

    useEffect(() => {
        const weekDays = getWeekDays(new Date(), weekOffset);
        const monthsInWeek = [
            ...new Set(weekDays.map(day => day.toLocaleString('en-US', { month: 'long' }).toLowerCase()))
        ];
        setMonth(monthsInWeek);
        const yearsInWeek = [
            ...new Set(weekDays.map(day => day.toLocaleString('en-US', { year: 'numeric' })))
        ];
        setYear(yearsInWeek);
    }, [weekOffset]);

    return (
        <div className="shiftCalendarWeek">

            <section className='shiftCalendarWeekBtns'>
                <button onClick={() => setWeekOffset(weekOffset - 1)}>Semana Anterior</button>
                <button onClick={() => setWeekOffset(weekOffset + 1)}>Semana Siguiente</button>
                <div className='shiftCalendarWeekMonths'>{month.map((mon) => <p key={mon}>{monthsArraySpanish(mon)}</p>)}</div>
            </section>

            <div className="shiftCalendarWeekHeader">
                <p>Hora</p>
                {weekDays.map((day, ind) => (
                    <div key={ind} className="shiftCalendarWeekDay">
                        <p>{day.getDate()}</p>
                        <p className='shiftCalendarWeekDayP'>{day.toLocaleString('default', { weekday: 'long' })}</p>
                    </div>
                ))}
            </div>

            <div className="shiftCalendarWeekBody">
                {hourConfig.map((hour, hourIndex) => (
                    <div key={hourIndex} className="shiftCalendarWeekBodyHour">
                        <p>{hour}</p>
                        <div className="shiftCalendarWeekCells">
                            {weekDays.map((day, dayIndex) => {
                                const isSelected = isEventInCell(hour, day.getDate());
                                return (
                                    <Fragment key={hourIndex + dayIndex}>
                                        <div
                                            className={`shiftCalendarWeekCell ${isSelected ? 'shiftCalendarWeekCellEvent' : ''}`}
                                            onClick={isSelected ? () => handleOpenModal(day, hour, hourIndex + dayIndex) : null}
                                        >
                                            {isSelected && (
                                                <>
                                                    <PeopleAltIcon className='shiftCalendarWeekIcon' />
                                                    <span className='shiftCalendarWeekSpan'>
                                                        {events.reduce((total, event) => {
                                                            if (
                                                                event.day.day === day.getDate() &&
                                                                month.some(m => m.toLowerCase() === event.day.month.toLowerCase()) &&
                                                                year.some(y => y == event.day.year) &&
                                                                event.hour.includes(hour)
                                                            ) {
                                                                return total + 1;
                                                            }
                                                            return total;
                                                        }, 0)}
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </Fragment>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
            <ModalCustom modalIsOpen={modal.open} closeModal={() => setModal({ open: false, vew: null, data: [] })}>
                {modal && modal.data.length > 0 && <ShiftForm shifts={modal.data} />}
            </ModalCustom>
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
    };
    return weekDays;
};