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
                </select>
            </div>

            {vew && <CleanAlerts setLoading={setLoading} type={vew} />}
        </div>
    );
};

export default CleanDataBase;