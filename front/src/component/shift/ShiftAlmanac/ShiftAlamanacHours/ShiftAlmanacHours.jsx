import './shiftAlmanacHours.scss';
import { typeShiftCategory } from '../../../../utils/typeShifts.utils';

const ShiftAlmanacHours = ({ config }) => {

    console.log(config);


    return (
        <div className='shiftAlmanacHours'>
            <h3>{typeShiftCategory(config.category)} {config.title}</h3>
            <p>Numero de salas {config.rooms}</p>

        </div>
    );
};

export default ShiftAlmanacHours;