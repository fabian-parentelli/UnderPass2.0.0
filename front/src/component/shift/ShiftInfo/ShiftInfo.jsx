import './shiftInfo.scss';
import { useNavigate } from 'react-router-dom';
import UnderShiftsLog from '../../fonts/UnderShiftsLog/UnderShiftsLog';

const ShiftInfo = () => {

    const navigate = useNavigate();

    return (
        <div className='shiftInfo'>
            <p>En esta sección encontrarás distintas tareas que puedes realizar referidas a la gestión de turnos.</p>
            <p>Puedes ver los turnos que has seleccionado, y administrar tus servicios.</p>
            <div className='shiftInfoLog'>
                <UnderShiftsLog size={3} />
            </div>
            <p>Te recomendamos que crees un sitio, para que funcione en conjunto con el sistema de gestión de turnos;</p>
            <p>esto dará mejor visibilidad a tu proyecto.</p>
            <p className='colUS shiftInfoClick' onClick={() => navigate('/sites')}>Crear Sitio</p>
        </div>
    );
};

export default ShiftInfo;