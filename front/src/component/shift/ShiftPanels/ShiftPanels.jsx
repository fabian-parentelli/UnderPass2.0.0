import ShiftConf from '../ShiftConf/ShiftConf';
import ShiftInfo from '../ShiftInfo/ShiftInfo';
import './shiftPanels.scss';
import { useState } from 'react';

const ShiftPanels = ({ userId }) => {

    const [vew, setVew] = useState(null);
    const handleVew = (v) => setVew(v === vew ? null : v);

    return (
        <div className='shiftPanels'>

            <section className='shiftPanelsButtons'>
                <button className='btn btnSH' onClick={() => handleVew('shif')}>Mis turnos</button>
                <button className='btn btnSH' onClick={() => handleVew('book')}>Reservas</button>
                <button className='btn btnSH' onClick={() => handleVew('admi')}>Administrar</button>
                <button className='btn btnSH' onClick={() => handleVew('conf')}>Configuración</button>
            </section>

            {vew === null && <ShiftInfo />} 
            {vew === 'shif' && 'Mis Turnos'}
            {vew === 'book' && 'book'}
            {vew === 'admi' && 'admi'}
            {vew === 'conf' && <ShiftConf userId={userId} />}
        </div>
    );
};

export default ShiftPanels;