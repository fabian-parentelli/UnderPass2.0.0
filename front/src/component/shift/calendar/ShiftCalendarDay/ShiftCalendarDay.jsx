import './shiftCalendarDay.scss';
import { useEffect, useState } from 'react';
import ShiftForm from '../../ShiftForm/ShiftForm';
import PersonIcon from '@mui/icons-material/Person';
import ModalCustom from '../../../utils/ModalCustom/ModalCustom';

const ShiftCalendarDay = ({ events, month, year, setMonth, setYear, hourConfig }) => {

    const [today, setToday] = useState(new Date());
    const [modal, setModal] = useState({ open: false, data: [] });

    useEffect(() => {
        setMonth([today.toLocaleString('en-US', { month: 'long' }).toLowerCase()]);
    }, []);

    const changeDay = (direction) => {
        const newDate = new Date(today);
        newDate.setDate(today.getDate() + direction);
        setMonth([newDate.toLocaleString('en-US', { month: 'long' }).toLowerCase()]);
        setToday(newDate);
    };

    useEffect(() => {
        setYear([today.toLocaleString('en-US', { year: 'numeric' })]);
    }, [today]);

    const handleModal = (id) => {
        setModal({
            open: true,
            data: events.filter(eve => eve._id === id)
        });
    };

    return (
        <div className='shiftCalendarDay'>

            <header className='shiftCalendarDayHeader'>
                <button onClick={() => changeDay(-1)}>Anterior</button>
                <p>{new Intl.DateTimeFormat('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(today)}</p>
                <button onClick={() => changeDay(+1)}>Siguiente</button>
            </header>

            <div className='shiftCalendarDayHours'>
                {hourConfig.map((hour) => (
                    <div key={hour} className='shiftCalendarDaySlot'>
                        <p>{hour}</p>
                        {events && events.length > 0 && events.map((event) => {
                            if (
                                event.day.day === today.getDate() &&
                                month.some(m => m.toLowerCase() === event.day.month.toLowerCase()) &&
                                year.some(y => y == event.day.year) &&
                                event.hour.includes(hour)
                            ) {
                                return (
                                    <div
                                        key={event._id}
                                        className='shiftCalendarDayEvent'
                                        onClick={() => handleModal(event._id)}
                                    >
                                        <PersonIcon />
                                        <p>{event.customerData.name}</p>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                ))}
            </div>
            <ModalCustom modalIsOpen={modal.open} closeModal={() => setModal({ open: false, data: [] })}>
                <ShiftForm shifts={modal.data} />
            </ModalCustom>
        </div>
    );
};

export default ShiftCalendarDay;