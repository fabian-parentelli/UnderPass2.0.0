import './myShifts.scss';
import Load from '../../utils/Load';
import { useEffect, useState } from 'react';
import ShiftForm from '../ShiftForm/ShiftForm';
import { getShiftsApi } from '../../../helpers/shift/getShifts.api.js';

const MyShifts = ({ userId }) => {

    const [shifts, setShifts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getShiftsApi({ userCustomer: userId });
            if (response.status === 'success') setShifts(response.result);
            else console.error(response);
            setLoading(false);
        }; fetchData();
    }, []);

    return (
        <div className='myShifts'>
            <h3>Mis Turnos</h3>
            <p className='myShiftsPP'>Acá puedes ver todos los turnos activos oredenados por fecha.</p>

            {!loading && (shifts && shifts.length > 0 
                ? <ShiftForm shifts={shifts} />
                : <p className='myShiftsP'>No tienes reservas activas.</p>)
            }
            <Load loading={loading} />
        </div>
    );
};

export default MyShifts;