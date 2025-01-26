import './shiftPostponerUser.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { monthsArray } from '../../../../../utils/typeShifts.utils.js';
import SnackbarAlert from '../../../../../component/utils/SnackbarAlert.jsx';
import { shiftSuspendApi } from '../../../../../helpers/shift/shiftSuspend.api.js';
import { getShiftconfApi } from '../../../../../helpers/shiftsconf/getShiftconf.api.js';
import ShiftAlmanac from '../../../../../component/shift/ShiftAlmanac/ShiftAlmanac.jsx';

const ShiftPostponerUser = ({ postpone, setLoading }) => {

    const [message, setMessage] = useState(false);
    const [config, setConfig] = useState(null);
    const [sanck, setSnack] = useState({ message: { satatus: '', mess: '' }, open: false });

    const handleSuspend = async () => {
        setLoading(true);
        if (sanck.open) setSnack({ message: { satatus: '', mess: '' }, open: false });
        const response = await shiftSuspendApi(postpone._id);
        if (response.status === 'success') setMessage(true);
        else setSnack({ message: { satatus: 'error', mess: response.error }, open: true });
        setLoading(false);
    };

    const handleNewDate = async () => {
        setLoading(true);
        if (sanck.open) setSnack({ message: { satatus: '', mess: '' }, open: false });
        const response = await getShiftconfApi({ userId: postpone.adminId, active: true });
        if (response.status === 'success') setConfig(response.result.docs[0]);
        else setSnack({ message: { satatus: 'error', mess: response.error }, open: true });
        setLoading(false);
    };

    if (message) return (
        <div className='shiftPostponerUser'>
            <p className='shiftPostponerUserIsNotPay'>La reserva ha sido suspendida. Como el pago no se realizó a través de nuestra plataforma, no podemos intervenir en el proceso de devolución. Por favor, coordina directamente con la persona o entidad correspondiente para gestionar el reembolso.</p>
            <Link to={`/shift/${postpone.shiftId.placeId}`}>
                <button className='btn btnSH' style={{ marginTop: '1rem' }}>Sitio</button>
            </Link>
        </div>
    );

    return (
        <div className='shiftPostponerUser'>

            <section className='shiftPostponerUserTop'>

                {postpone && postpone.to !== 'admin' &&
                    <div className='shiftPostponerUserImg'>
                        <h3>{postpone.shiftId.place}</h3>
                        <img src={postpone.shiftId.img} alt="img" />
                    </div>
                }

                <div className='shiftPostponerUserRight'>
                    <p><span>Fecha de Reserva:</span> {postpone.shiftId.day.day}/{monthsArray.indexOf(postpone.shiftId.day.month) + 1}/{postpone.shiftId.day.year}</p>
                    <p><span>Hora:</span> {postpone.shiftId.hour.join(' - ')}</p>
                    <p><span>Sala:</span> {postpone.shiftId.room ? postpone.shiftId.room : 'General'}</p>
                    {postpone.shiftId.sections && <p><span>Sala:</span> {postpone.shiftId.sections}</p>}
                    <p><span>Alerta generada: </span>{new Date(postpone.date).toLocaleString()}</p>
                    <p className='pgray'><span>Número de reserva:</span> {postpone.shiftId._id}</p>
                </div>

            </section>

            <p className='shiftPostponerUserMessage'>{postpone.message}</p>

            <section className='shiftPostponerUserBtn'>
                <button className='btn btnSH' onClick={handleNewDate}>Nueva Fecha</button>
                <button className='btn btnSH' onClick={handleSuspend}>Suspender</button>
            </section>

            {config &&
                <section className='shiftPostponerUserAlmanac'>
                    <ShiftAlmanac config={config} width={1} typeApi='update' isShiftId={postpone.shiftId._id} />
                </section>
            }

            <SnackbarAlert message={sanck.message} open={sanck.open} />
        </div>
    );
};

export default ShiftPostponerUser;