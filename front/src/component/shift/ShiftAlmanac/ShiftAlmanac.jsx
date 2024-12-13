import './shiftAlmanac.scss';
import Load from '../../utils/Load.jsx';
import { useEffect, useState } from 'react';
import ShiftCalendar from './ShiftCalendar/ShiftCalendar';
import { formatText } from '../../../utils/formatText.utils.js';
import { newShiftApi } from '../../../helpers/shift/newShift.api.js';
import ShiftAlmanacHours from './ShiftAlamanacHours/ShiftAlmanacHours';
import { getShiftDataApi } from '../../../helpers/shift/getShiftData.api.js';

const ShiftAlmanac = ({ config }) => {

    console.log(config);
    

    const [book, setBook] = useState([]);
    const [type, setType] = useState(null);
    const [rooms, setRooms] = useState(null);
    const [loading, setLoading] = useState(false);
    const [nonWorkDays, setnonWorkDays] = useState([]);
    const [selected, setSelected] = useState(getCurrentDate());

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            if ((config.rooms > 1 && rooms) || config.rooms === 1) {
                setnonWorkDays([]);
                const query = { uid: config.userId, day: selected.day, month: selected.month, year: selected.year };
                if (rooms) query.room = formatText(rooms);
                const response = await getShiftDataApi(query);
                if (response.status === 'success') {
                    const booksFuture = [];
                    response.result.forEach((res) => {
                        if (res.active) booksFuture.push(res); 
                        if (res.notDay) setnonWorkDays(res.notDay);
                    });
                    setBook(booksFuture);
                };
            };
            setLoading(false);
        }; if (config && config.userId) fetchData();
    }, [config, selected, rooms]);

    const handleBook = async () => {
        const query = { day: selected, hour: type, userId: config.userId };
        if (rooms) query.room = formatText(rooms);

        // Luego poner una condicional que si no ponen un horario no lo concidero....
        const response = await newShiftApi(query);
        console.log(response);
    };

    return (
        <div className='shiftAlmanac'>
            <section>
                {config && <ShiftCalendar config={config} setSelected={setSelected} nonWorkDays={nonWorkDays} selected={selected} rooms={rooms} />}
                {config && <ShiftAlmanacHours config={config} setType={setType} book={book} setRooms={setRooms} rooms={rooms} />}
            </section>
            <button className='btn btnSH shiftAlmanacBtn' onClick={handleBook}>Reservar</button>
            <Load loading={loading} />
        </div>
    );
};

export default ShiftAlmanac;

const getCurrentDate = () => {
    const today = new Date();
    const day = today.getDate();
    const monthNames = [
        'january', 'february', 'march', 'april', 'may', 'june',
        'july', 'august', 'september', 'october', 'november', 'december'
    ];
    const month = monthNames[today.getMonth()];
    const year = today.getFullYear();
    return { day, month, year };
};