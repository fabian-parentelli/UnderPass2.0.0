import './shiftAllRooms.scss';
import { useEffect, useState } from 'react';
import ShiftHours from '../ShiftHoursConf/ShiftHoursConf';

const ShiftAllRooms = ({ config, setType, book, setRooms, rooms = "", sections, setSections }) => {
    const [roomSel, setRoomSel] = useState([]);
    const [vew, setVew] = useState(null);

    const handleRoom = (e) => {
        const selectedRoom = e.target.value;
        setRooms(selectedRoom);
        setSections(null);
        setRoomSel([]);
    };

    const handleSect = (e) => {
        const title = e.target.value;
        const sect = roomSel.find(sect => sect.title === title);
        setSections(sect);
    };

    useEffect(() => {
        if (rooms) {
            const room = config.roomsData.find(rom => rom.name === rooms);
            setVew(room);
            if (room && room.sections.length > 0) setRoomSel(room.sections);
        } else setVew(null);
    }, [rooms]);

    return (
        <div className="shiftAllRooms">

            <section className="shiftAllRoomsRoom">
                <label>Sala</label>
                <select onChange={handleRoom} value={rooms || ""}>
                    <option value="">Elegir</option>
                    {config?.roomsData.map((room, ind) => (
                        <option key={ind} value={room.name}>{room.name}</option>
                    ))}
                </select>
            </section>

            {roomSel.length > 0 && (
                <section className="shiftAllRoomsRoom">
                    <label>Sección</label>
                    <select onChange={handleSect} value={sections?.title || ""}>
                        <option value="">Seleccionar Sección</option>
                        {roomSel.map((sect, ind) => (
                            <option key={ind} value={sect.title}>{sect.title}</option>
                        ))}
                    </select>
                </section>
            )}

            {!vew && !sections ? (
                <p style={{ color: 'green', marginTop: '1rem' }}>No hay nada seleccionado</p>
            ) : vew?.sections?.length < 1 ? (
                <ShiftHours hour={config.hour} setType={setType} book={book} />
            ) : !sections ? (
                <p style={{ color: 'green', marginTop: '1rem' }}>No hay nada seleccionado</p>
            ) : (
                <ShiftHours hour={sections.hour} setType={setType} book={book} />
            )}

        </div>
    );
};

export default ShiftAllRooms;