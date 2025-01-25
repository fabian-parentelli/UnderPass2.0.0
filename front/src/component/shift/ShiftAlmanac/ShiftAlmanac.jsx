import './shiftAlmanac.scss';
import Load from '../../utils/Load.jsx';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShiftCalendar from './ShiftCalendar/ShiftCalendar';
import SnackbarAlert from '../../utils/SnackbarAlert.jsx';
import { formatText } from '../../../utils/formatText.utils.js';
import { monthMapping } from '../../../utils/typeShifts.utils.js';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import { updShiftApi } from '../../../helpers/shift/updShift.api.js';
import { newShiftApi } from '../../../helpers/shift/newShift.api.js';
import ShiftAlmanacHours from './ShiftAlamanacHours/ShiftAlmanacHours';
import ShiftDataUser from '../shifDataUser/ShiftDataUser/ShiftDataUser.jsx';
import { getShiftDataApi } from '../../../helpers/shift/getShiftData.api.js';
import ShiftAlmanacHolidays from './ShiftAlmanacHolidays/ShiftAlamanacHolidays.jsx';
import ShiftInputUser from '../shifDataUser/tools/ShiftInputUser/ShiftInputUser.jsx';
import ShiftDataAdminUser from '../shifDataUser/ShiftDataAdminUser/ShiftDataAdminUser.jsx';

const ShiftAlmanac = ({ config, width = 4, typeApi, isShiftId }) => {

    const { user, current } = useLoginContext();

    useEffect(() => {
        const fetchData = async () => {
            await current();
        }; fetchData();
    }, []);

    const navigate = useNavigate();
    const [book, setBook] = useState([]);
    const [type, setType] = useState(null);
    const [rooms, setRooms] = useState(null);
    const [loading, setLoading] = useState(false);
    const [nonWorkDays, setnonWorkDays] = useState([]);
    const [selected, setSelected] = useState(getCurrentDate());
    const [sections, setSections] = useState(null);
    const [dataUser, setDataUser] = useState(null);
    const [vew, setVew] = useState({ status: false, message: '' });
    const [snack, setSnack] = useState({ message: { status: '', mess: '' }, open: false });

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
                if (!type || !dataUser?.name || !dataUser?.phone || !dataUser?.email) setVew({ status: false, message: 'Seleccionar día y datos del usuario' });
                else setVew({ status: true, message: 'Listo para reservar' });
            };
        }
    }, [type, dataUser, selected, rooms, sections, config]);

    const handleBook = async () => {
        if (!user.logged) { localStorage.setItem('path', `shift/${config._id}`); navigate('/login') };
        if (vew.status) {
            setLoading(true);
            if (snack.open) setSnack({ message: { status: '', mess: '' }, open: false });
            const query = {
                day: selected, hour: type, userId: config.userId, customer: dataUser,
                dataConf: {
                    title: config.title, location: config.location
                }
            };
            if (rooms) query.room = formatText(rooms);
            if (sections) query.sections = formatText(sections.title);
            if (typeApi === 'update') {
                const response = await updShiftApi(isShiftId, query);
                if (response.status === 'success') setSnack({ message: { status: 'success', mess: 'Has modificado tu resreva con exito' }, open: true });
                else setSnack({ message: { status: 'error', mess: response.error }, open: true });
            } else if (typeApi === 'admin') {
                const response = await newShiftApi(query);
                if (response.status === 'success') setSnack({ message: { status: 'success', mess: 'Has creado una resreva con exito' }, open: true });
                else setSnack({ message: { status: 'error', mess: response.error }, open: true });
            } else {
                // Aca conectar con  el carrito de compras.....
                // Aca conectar con  el carrito de compras.....
                // Pero tengo que meter un return grande como una casa para que rediriga al carrito
                // Pero tengo que meter un return grande como una casa para que rediriga al carrito
            };
            setLoading(false);
            setTimeout(() => {
                setSnack({ message: { status: '', mess: '' }, open: false });
                navigate('/');
            }, 4000);
        };
    };

    return (
        <div className='shiftAlmanac'>
            {config && config.holidays && <ShiftAlmanacHolidays config={config} />}
            <section className='shiftAlmanacSect' style={{ gap: `${width}rem` }}>
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
                            ? <ShiftDataAdminUser userId={config.userId} setDataUser={setDataUser} />
                            : !user.data?.role
                                ? <ShiftInputUser setDataUser={setDataUser} />
                                : (user.data.role !== 'user'
                                    ? <ShiftDataAdminUser userId={config.userId} setDataUser={setDataUser} />
                                    : <ShiftDataUser setDataUser={setDataUser} user={user?.data} />
                                )
                        }
                    </>
                }
            </section>
            <button className='btn btnSH shiftAlmanacBtn' onClick={handleBook}>{user.logged ? 'Reservar' : 'inicia sesión'}</button>
            {user.logged
                ? <p className={vew.status ? 'shiftAlmanacOk' : 'shiftAlmanacOff'}>{vew.message}</p>
                : <p className='shiftAlmanacOff'>Debes iniciar sesión, para poder reservar un turno.</p>
            }

            <SnackbarAlert message={snack.message} open={snack.open} />
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