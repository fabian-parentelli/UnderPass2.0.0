import './shiftAlmanacHours.scss';
import ShiftOnlyRooms from './ShiftOnlyRooms/ShiftOnlyRooms';
import { typeShiftCategory } from '../../../../utils/typeShifts.utils.js';
import ShiftAllRooms from './ShiftAllRooms/ShiftAllRooms.jsx';

const ShiftAlmanacHours = ({ config, setType, book, setRooms, rooms }) => {

    return (
        <div className='shiftAlmanacHours'>
            <h3>{typeShiftCategory(config.category)} {config.title}</h3>
            <p>Numero de salas {config.rooms}</p>
            {config && config.rooms < 2
                ? <ShiftOnlyRooms config={config} setType={setType} book={book} />
                : <ShiftAllRooms config={config} setType={setType} book={book} setRooms={setRooms} rooms={rooms} />
            }
        </div>
    );
};

export default ShiftAlmanacHours;