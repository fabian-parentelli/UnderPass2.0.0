import './shiftAlmanac.scss';
import Load from '../../utils/Load.jsx';
import { useEffect, useState } from 'react';
import ShiftCalendar from './ShiftCalendar/ShiftCalendar';
import { newShiftApi } from '../../../helpers/shift/newShift.api.js';
import ShiftAlmanacHours from './ShiftAlamanacHours/ShiftAlmanacHours';
import { getShiftDataApi } from '../../../helpers/shift/getShiftData.api.js';

const ShiftAlmanac = ({ config }) => {

    const [book, setBook] = useState([]);
    const [nonWorkDays, setnonWorkDays] = useState([]);
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState(null);
    const [selected, setSelected] = useState(getCurrentDate());

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getShiftDataApi({ uid: config.userId, day: selected.day, month: selected.month, year: selected.year });
            if (response.status === 'success') {
                const booksFuture = [];
                response.result.forEach((res) => {
                    if (res.active) booksFuture.push(res);
                    if (res.notDay) setnonWorkDays([res.notDay]);
                });
                setBook(booksFuture);
            };
            setLoading(false);
        }; if (config && config.userId) fetchData();
    }, [config, selected]);

    const handleBook = async () => {
        const response = await newShiftApi({ day: selected, hour: type, userId: config.userId });
        console.log(response);
    };

    return (
        <div className='shiftAlmanac'>
            <section>
                {config && <ShiftCalendar config={config} setSelected={setSelected} nonWorkDays={nonWorkDays} />}
                {config && <ShiftAlmanacHours config={config} setType={setType} book={book} />}
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