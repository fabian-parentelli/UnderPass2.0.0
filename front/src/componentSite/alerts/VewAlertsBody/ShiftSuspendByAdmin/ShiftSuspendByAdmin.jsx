import './shiftSuspendByAdmin.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { monthsArray } from '../../../../utils/typeShifts.utils.js';
import { useLoginContext } from '../../../../context/LoginContext.jsx';
import { getShiftsApi } from '../../../../helpers/shift/getShifts.api.js';

const ShiftSuspendByAdmin = ({ id, setLoading }) => {

    const [shift, setShift] = useState(null);
    const { user } = useLoginContext();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getShiftsApi({ id, active: false, place: true });
            if (response.status === 'success') setShift(response.result[0]);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);

    console.log(shift);
    

    return (
        <>
            {shift &&
                <div className='shiftSuspendByAdmin'>

                    <section className='shiftPostponerUserTop'>

                        <div className='shiftPostponerUserImg'>
                            <h3>{shift.place.name}</h3>
                            <img src={shift.place.img} alt="img" />
                        </div>

                        <div className='shiftPostponerUserRight'>
                            <p><span>Fecha de Reserva:</span> {shift.day.day}/{monthsArray.indexOf(shift.day.month) + 1}/{shift.day.year}</p>
                            <p><span>Hora:</span> {shift.hour.join(' - ')}</p>
                            <p><span>Sala:</span> {shift.room ? shift.room : 'General'}</p>
                            {shift.sections && <p><span>Sala:</span> {shift.sections}</p>}
                            <p className='pgray'><span>Número de reserva:</span> {shift._id}</p>
                        </div>

                    </section>

                    <p className='shiftSuspendByAdminP'>Lamentamos informarte que la reserva ha sido suspendida. Te recordamos que, como plataforma, no intervenimos en el proceso de devolución del dinero. Por favor, coordina directamente con la persona o entidad correspondiente para gestionar cualquier reembolso relacionado con esta reserva.</p>
                    
                    {user.logged && user.data._id === shift.userId && !shift.isPay &&
                        <div className='shiftSuspendByAdminUser'>
                            <p>{shift.customerData.name}</p>
                            <p>{shift.customerData.email}</p>
                            <p>{shift.customerData?.phone}</p>
                        </div>
                    }

                    <Link to={`/shift/${shift.place.shiftId}`}>
                        <button className='btn btnSH' style={{marginTop: '2rem'}}>Sitio</button>
                    </Link>
                </div>
            }
        </>
    );
};

export default ShiftSuspendByAdmin;