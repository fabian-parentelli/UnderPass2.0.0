import './shiftPospone.scss';
import { useEffect, useState } from 'react';
import TextAreas from '../../../utils/TextAreas/TextAreas';
import { monthMapping } from '../../../../utils/typeShifts.utils.js';

const ShiftPospone = ({ admin, shift }) => {

    const [values, setValues] = useState({ message: '' });
    const [before, setBefore] = useState(true);

    useEffect(() => {
        const data = new Date(shift.day.year, monthMapping[shift.day.month], shift.day.day, ...shift.hour[0].split(':'));
        const today = new Date();
        const diffInMs = data - today;
        const isWithin24Hours = diffInMs > 0 && diffInMs <= 86400000;
        setBefore(isWithin24Hours);
    }, [])

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <form className='shiftPospone'>
            <p className='colSH shiftPosponeP'>Solicitud de posponer:</p>
            <label className='pgray'>Enviar sugerencia</label>

            <TextAreas
                placeholder={'Envía una sugerencia'}
                value={values.message}
                handleChange={handleChange}
                name='message'
            />

            <p className='pgray'>
                {admin
                    ? 'Una vez enviada la solicitud de posponer, debes esperar la respusta del cliente. Si este no puede cambiar de fecha, debes devolver el dinero para que UnderPass lo pueda revertir.'
                    : 'Una vez enviada la solicitud de posponer, debes esperar la respusta del administrador. Si este no lo hace antes de la fecha se te devolverá el dinero, en las siguientes 72 horas.'
                }
            </p>

            <button className='btn btnSH'>Enviar</button>
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

// Estoy aca ver como lo resuelo a esto, seguro que tengo que crear una base de datos
// Para mensajes con respuestas configurables........