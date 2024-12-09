import './shiftOnlyRooms.scss';
import ShiftHours from '../ShiftHoursConf/ShiftHoursConf';

const ShiftOnlyRooms = ({ config, setType }) => {

    return (
        <div className='shiftOnlyRooms'>
            <ShiftHours hour={config.hour} setType={setType} />
            <p className='pgray'>El turno tiene una duración de <span className='colSH'>{config?.hour?.fractionHour}</span> minutos.</p>
        </div>
    );
};

export default ShiftOnlyRooms;