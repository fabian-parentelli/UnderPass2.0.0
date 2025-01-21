import './shiftPospone.scss';
import { Spinner } from 'faradaycomp';
import { useEffect, useState } from 'react';
import TextAreas from '../../../utils/TextAreas/TextAreas';
import { monthMapping } from '../../../../utils/typeShifts.utils.js';
import { newPostponeApi } from '../../../../helpers/shift/newPostpone.api.js';

const ShiftPospone = ({ admin, shift, setSnack, setModal }) => {

    const [before, setBefore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({ message: '' });

    useEffect(() => {
        const data = new Date(shift.day.year, monthMapping[shift.day.month], shift.day.day, ...shift.hour[0].split(':'));
        const today = new Date();
        const diffInMs = data - today;
        const isWithin24Hours = diffInMs > 0 && diffInMs <= 86400000;
        setBefore(isWithin24Hours);
    }, [])

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await newPostponeApi({
            shift: shift,
            to: admin ? 'customer' : 'admin',
            message: values.message
        });
        if (response.status === 'success') {
            setSnack({ open: true, message: { status: 'success', mess: 'Propuesta enviada' } });
        } else setSnack({ open: true, message: { status: 'error', mess: response } });
        setTimeout(() => {
            setSnack({ open: false, message: { status: '', mess: '' } });
            setModal({ open: false, id: null });
            setLoading(false);
        }, 2000);
    };

    return (
        <form className='shiftPospone' onSubmit={handleSubmit}>

            <p className='colSH shiftPosponeP'>Solicitud de posponer:</p>

            <label className='pgray'>Enviar sugerencia</label>
            <TextAreas
                placeholder={'Envía una sugerencia'}
                value={values.message}
                handleChange={handleChange}
                name='message'
                required={true}
            />

            <p className='pgray'>
                {admin
                    ? 'Una vez enviada la solicitud de posponer, debes esperar la respusta del cliente. Si este no puede cambiar de fecha, debes devolver el dinero para que UnderPass lo pueda revertir.'
                    : 'Una vez enviada la solicitud de posponer, debes esperar la respusta del administrador. Si este no lo hace antes de la fecha se te devolverá el dinero, en las siguientes 72 horas.'
                }
            </p>

            <button className='btn btnSH' disabled={loading}>
                {loading
                    ? <div className='shiftPosponeBtn'><Spinner color="#fff" size={25} /></div>
                    : 'Enviar'
                }
            </button>

            <p className='shiftPosponePPP' style={{ color: !before ? 'green' : 'red' }}>
                {!before
                    ? 'Puedes posponer hasta 24 horas antes de la reserva.'
                    : 'Ya no puedes posponer, estamos a menos de 24 horas de la reserva.'
                }
            </p>

        </form>
    );
};

export default ShiftPospone;