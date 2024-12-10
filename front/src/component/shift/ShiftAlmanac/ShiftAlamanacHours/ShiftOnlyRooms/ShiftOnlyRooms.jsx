import './shiftOnlyRooms.scss';
import ShiftHours from '../ShiftHoursConf/ShiftHoursConf';

const ShiftOnlyRooms = ({ config, setType, book }) => {

    return (
        <div className='shiftOnlyRooms'>
            <ShiftHours hour={config.hour} setType={setType} book={book} />
            <p className='pgray'>El turno tiene una duración de <span className='colSH'>{config?.hour?.fractionHour}</span> minutos.</p>
        </div>
    );
};

export default ShiftOnlyRooms;