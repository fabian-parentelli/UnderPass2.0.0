import ShiftConf from '../ShiftConf/ShiftConf';
import './shiftPanels.scss';
import { useState } from 'react';

const ShiftPanels = ({ userId }) => {

    const [vew, setVew] = useState(null);
    const handleVew = (v) => setVew(v === vew ? null : v);

    return (
        <div className='shiftPanels'>

            <section className='shiftPanelsButtons'>
                <button className='btn btnSH' onClick={() => handleVew('conf')}>Configuración</button>
                <button className='btn btnSH' onClick={() => handleVew('book')}>Reservas</button>
                <button className='btn btnSH' onClick={() => handleVew('admi')}>Administrar</button>
            </section>

            {vew === 'conf' && <ShiftConf userId={userId} />}
            {vew === 'book' && 'book'}
            {vew === 'admi' && 'admi'}
        </div>
    );
};

export default ShiftPanels;