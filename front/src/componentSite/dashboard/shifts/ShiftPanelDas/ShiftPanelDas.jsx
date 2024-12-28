import './shiftPanelDas.scss';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Title from '../../../../component/dashboard/Title/Title';
import { useEffect, useState } from 'react';

const ShiftPanelDas = () => {

    const [configs, setConfigs] = useState(null);
    const [query, setQuery] = useState({ active: true });
    const [vew, setVew] = useState(null);

    const handleVew = (v) => setVew(v === vew ? null : v);

    useEffect(() => {
        if (vew !== 'IN') setQuery({ ...query, country: vew });
        else setQuery({ ...query, country: undefined });
    }, [vew]);

    return (
        <div className='shiftPanelDas'>
            <Title Icon={DateRangeIcon} name='Turnos' />

            <section className='shiftPanelDasButons'>
                <button className={`btn btnSH ${vew !== 'UY' ? 'boxTrue' : 'boxFalse'}`} onClick={() => handleVew('UY')}>Urugauy</button>
                <button className={`btn btnSH ${vew !== 'AR' ? 'boxTrue' : 'boxFalse'}`} onClick={() => handleVew('AR')}>Argentina</button>
                <button className={`btn btnSH ${vew !== 'IN' ? 'boxTrue' : 'boxFalse'}`} onClick={() => handleVew('IN')}>Estadísticas</button>
            </section>

        </div>
    );
};

export default ShiftPanelDas;