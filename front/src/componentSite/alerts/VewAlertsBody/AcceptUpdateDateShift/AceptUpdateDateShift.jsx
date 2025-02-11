import './accepUpdateDateShift.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { monthsArray } from '../../../../utils/typeShifts.utils.js';
import { getShiftsApi } from '../../../../helpers/shift/getShifts.api.js';
import { actPostByShIdApi } from '../../../../helpers/shift/postpone/actPostByShId.api.js';

const AccepUpdateDateShift = ({ id, setLoading }) => {

    const navigate = useNavigate();
    const [shift, setShift] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getShiftsApi({ id });
            if (response.status === 'success') setShift(response.result[0]);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);

    const handleActive = async () => {
        setLoading(true);        
        const response = await actPostByShIdApi(id);
        if (response.status === 'success') navigate('/');
        else console.error(response.error);
        setLoading(false);
    };

    return (
        <div className='accepUpdateDateShift'>
            {shift &&
                <>
                    <h3>{shift.customerData.name} ha aceptado modificar su reserva.</h3>
                    <div className='line' style={{ backgroundColor: '#ec3639', width: '50%' }}></div>
                    <p>La reserva del día {shift.oldDate.day}/{monthsArray.findIndex(d => d === shift.oldDate.month) + 1}/{shift.oldDate.year} - {shift.oldHour.join(' - ')}.</p>
                    <p>A pasado para el {shift.day.day}/{monthsArray.findIndex(d => d === shift.day.month) + 1}/{shift.day.year} - {shift.hour.join(' - ')} Horas.</p>
                    <button className='btn btnSH' onClick={handleActive}>Volver</button>
                </>
            }
        </div>
    );
};

export default AccepUpdateDateShift;