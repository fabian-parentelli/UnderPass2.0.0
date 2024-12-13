import './shiftAllRooms.scss';
import ShiftHours from '../ShiftHoursConf/ShiftHoursConf';

const ShiftAllRooms = ({ config, setType, book, setRooms, rooms }) => {

    const handleRoom = (e) => setRooms(e.target.value);

    return (
        <div className='shiftAllRooms'>

            <section className='shiftAllRoomsRoom'>
                <label>Sala</label>
                <select onChange={handleRoom}>
                    <option value="">Elegir</option>
                    {config && config.roomsData.map((room, ind) => (
                        <option key={ind} value={room.name}>{room.name}</option>
                    ))}
                </select>
            </section>

            {rooms &&
                <ShiftHours hour={config.hour} setType={setType} book={book} />
            }
        </div>
    );
};

export default ShiftAllRooms;