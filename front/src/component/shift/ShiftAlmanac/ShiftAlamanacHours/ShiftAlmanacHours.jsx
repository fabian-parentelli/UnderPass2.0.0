import './shiftAlmanacHours.scss';
import ShiftOnlyRooms from './ShiftOnlyRooms/ShiftOnlyRooms';
import { typeShiftCategory } from '../../../../utils/typeShifts.utils.js';

const ShiftAlmanacHours = ({ config, setType, book }) => {

    return (
        <div className='shiftAlmanacHours'>
            <h3>{typeShiftCategory(config.category)} {config.title}</h3>
            <p>Numero de salas {config.rooms}</p>
            {config && config.rooms < 2
                ? <ShiftOnlyRooms config={config} setType={setType} book={book} />
                : ''
            }
        </div>
    );
};

export default ShiftAlmanacHours;