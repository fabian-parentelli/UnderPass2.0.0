import ShiftOnlyRooms from './ShiftOnlyRooms/ShiftOnlyRooms';
import { typeShiftCategory } from '../../../../utils/typeShifts.utils.js';
import ShiftAllRooms from './ShiftAllRooms/ShiftAllRooms.jsx';

const ShiftAlmanacHours = ({ config, setType, book, setRooms, rooms, sections, setSections }) => {

    return (
        <div className='shiftAlmanacHours'>
            <h3>{typeShiftCategory(config.category)} {config.title}</h3>
            <p>Numero de salas {config.rooms}</p>
            {config && config.rooms < 2
                ? <ShiftOnlyRooms
                    config={config}
                    setType={setType}
                    book={book}
                    sections={sections}
                    setSections={setSections}
                />
                : <ShiftAllRooms
                    config={config}
                    setType={setType}
                    book={book}
                    setRooms={setRooms}
                    rooms={rooms}
                    sections={sections}
                    setSections={setSections}
                />
            }
        </div>
    );
};

export default ShiftAlmanacHours;