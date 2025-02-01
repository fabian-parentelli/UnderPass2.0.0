import './cleanDataBase.scss';
import { useState } from 'react';
import CleanAlerts from './CleanAlerts/CleanAlerts';

const CleanDataBase = ({ setLoading }) => {

    const [vew, setVew] = useState('');

    const handleVew = (e) => setVew(e.target.value);

    return (
        <div className='cleanDataBase'>

            <div className='cleanDataBaseSelect'>
                <label>Elegir base de datos</label>
                <select name="" onChange={handleVew} value={vew}>
                    <option value="">Elegir base de datos</option>
                    <option value="maxAlert">Alertas</option>
                    <option value="maxPostp">Turnos pospuestos</option>
                    <option value="maxShift">Turnos</option>
                </select>
            </div>

            {vew === '' &&
                <>
                    <p>1- Configuración de días, en el cual se concidera vencido un dato.</p>
                    <p>2- Borrar individualmente o de forma grupal.</p>
                </>
            }

            {vew && <CleanAlerts setLoading={setLoading} type={vew} />}
        </div>
    );
};

export default CleanDataBase;