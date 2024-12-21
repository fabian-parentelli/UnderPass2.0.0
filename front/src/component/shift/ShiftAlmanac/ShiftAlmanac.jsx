import './shiftAlmanac.scss';
import Load from '../../utils/Load.jsx';
import { useEffect, useState } from 'react';
import ShiftCalendar from './ShiftCalendar/ShiftCalendar';
import { formatText } from '../../../utils/formatText.utils.js';
import { newShiftApi } from '../../../helpers/shift/newShift.api.js';
import ShiftAlmanacHours from './ShiftAlamanacHours/ShiftAlmanacHours';
import { getShiftDataApi } from '../../../helpers/shift/getShiftData.api.js';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import ShiftDataAdminUser from '../shifDataUser/ShiftDataAdminUser/ShiftDataAdminUser.jsx';
import { monthMapping } from '../../../utils/typeShifts.utils.js';

const ShiftAlmanac = ({ config }) => {

    const { user } = useLoginContext();
    const [book, setBook] = useState([]);
    const [type, setType] = useState(null);
    const [rooms, setRooms] = useState(null);
    const [loading, setLoading] = useState(false);
    const [nonWorkDays, setnonWorkDays] = useState([]);
    const [selected, setSelected] = useState(getCurrentDate());
    const [sections, setSections] = useState(null);
    const [dataUser, setDataUser] = useState(null);
    const [vew, setVew] = useState({ status: false, message: '' });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            if ((config.rooms > 1 && rooms) || config.rooms === 1) {
                setnonWorkDays([]);
                const query = { uid: config.userId, day: selected.day, month: selected.month, year: selected.year };
                if (rooms) query.room = formatText(rooms);
                if (sections) query.sections = formatText(sections.title);
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
    }, [config, selected, rooms, sections]);

    useEffect(() => {
        if (config) {
            const arrayDay = setArrayDays(config, rooms, sections);
            const date = new Date(selected.year, monthMapping[selected.month.toLowerCase()], selected.day);
            const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
            const isDay = arrayDay.includes(dayOfWeek);
            if (!isDay) setVew({ status: false, message: 'El día seleccionado no es correcto' });
            else {
                if (!type || !dataUser?.name) setVew({ status: false, message: 'Seleccionar día y datos del usuario' });
                else setVew({status: true, message: 'Listo para reservar'});
            };
        }
    }, [type, dataUser, selected, rooms, sections, config]);

    const handleBook = async () => {
        if (vew.status) {
            const query = { day: selected, hour: type, userId: config.userId, customer: dataUser };
            if (rooms) query.room = formatText(rooms);
            if (sections) query.sections = formatText(sections.title);

            console.log(query);


            // Luego poner una condicional que si no ponen un horario no lo concidero....
            // const response = await newShiftApi(query);
            // console.log(response);
        };
    };

    return (
        <div className='shiftAlmanac'>
            <section>
                {config &&
                    <>
                        <ShiftCalendar
                            config={sections || config}
                            setSelected={setSelected}
                            nonWorkDays={nonWorkDays}
                            selected={selected}
                            rooms={rooms}
                        />
                        <ShiftAlmanacHours
                            config={config}
                            setType={setType}
                            book={book}
                            setRooms={setRooms}
                            rooms={rooms}
                            sections={sections}
                            setSections={setSections}
                        />
                        {(user && user.data) &&
                            user.data._id === config.userId
                            ? <ShiftDataAdminUser configId={config._id} setDataUser={setDataUser} />
                            : user.data.role !== 'user'
                                ? 'Esres el administrador del sitio'
                                : 'Eres el usuario administrador'
                        }
                    </>
                }
            </section>
            <button className='btn btnSH shiftAlmanacBtn' onClick={handleBook}>Reservar</button>
            <p className={vew.status ? 'shiftAlmanacOk' : 'shiftAlmanacOff'}>{vew.message}</p>
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

const setArrayDays = (config, rooms, sections) => {
    let result = [];
    if (rooms) {
        result = config.days;
        if (sections) result = sections.days;
    } else {
        result = config.days;
        if (sections) result = sections.days;
    };
    return result;
};