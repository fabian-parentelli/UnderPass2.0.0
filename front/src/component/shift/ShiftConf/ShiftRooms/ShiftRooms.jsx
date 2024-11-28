import './shiftRooms.scss';
import { useState } from 'react';
import Switch from '@mui/material/Switch';

const ShiftRooms = ({ values, setValues }) => {

    const [roomsData, setRoomsData] = useState([{ name: '', ability: false, abilityNumber: 1 }]);

    const handleRoomsChange = (e) => {
        const roomCount = +e.target.value;
        const updatedRooms = [...Array(roomCount)].map((_, index) =>
            roomsData[index] || { name: '', ability: false, abilityNumber: 1 }
        );
        setRoomsData(updatedRooms);
        setValues({ ...values, rooms: roomCount });
    };

    const handleRoomChange = (index, field, value) => {
        const updatedRooms = [...roomsData];
        updatedRooms[index] = { ...updatedRooms[index], [field]: value };
        setRoomsData(updatedRooms);
        setValues({ ...values, roomsData: updatedRooms });
    };

    return (
        <details className='shiftRooms'>
            <summary>Disposición física</summary>

            <section className='shiftRoomsSect'>
                <div className='shiftRoomsEnv'>
                    <label>Cantidad de ambientes</label>
                    <input
                        type="number"
                        name='rooms'
                        value={values.rooms || 1}
                        onChange={handleRoomsChange}
                    />
                </div>
                <p className='pgray'>Cuantos ambientes tienes para alquilar en simultáneo.</p>
            </section>

            {roomsData.map((room, ind) => (

                <section key={ind} className='shiftRoomsSect' style={{ marginTop: '1rem' }}>

                    <div className='line' style={{ margin: '1rem 0' }}></div>

                    <div className='shiftRoomsName' style={{ margin: '1rem 0' }}>
                        <label>Nombre del ambiente</label>
                        <input
                            type="text"
                            name='rooms'
                            placeholder='ej. Sala Gustavo Cerati'
                            value={room.name}
                            onChange={(e) => handleRoomChange(ind, 'name', e.target.value)}
                        />
                    </div>

                    <div className='shiftRoomsAbility'>
                        <label>Capacidad de personas</label>
                        <div className='shiftRoomsSwitch'>
                            <p>NO</p>
                            <Switch
                                checked={room.ability}
                                onChange={(e) => handleRoomChange(ind, 'ability', e.target.checked)}
                            />
                            <p>SI</p>
                        </div>
                        <p className='pgray'>Si Alquilas por capacidad de personas, ejemplo un estudio de danza, que solo acepta 10 estudiantes por turno, la opción es SI.<br />
                            Si alquilas solo el lugar ejemplo una sala de ensayo y es indiferente las personas que integran esa agrupación, la opción es NO.</p>
                    </div>

                    {room.ability &&
                        <div className='shiftRoomsEnv' style={{ marginTop: '1rem' }}>
                            <label>Cantidad de personas</label>
                            <input
                                type="number"
                                name='abilityNumber'
                                value={room.abilityNumber}
                                onChange={(e) => handleRoomChange(ind, 'abilityNumber', +e.target.value)}
                            />
                        </div>
                    }

                </section>
            ))}
        </details>
    );
};

export default ShiftRooms;