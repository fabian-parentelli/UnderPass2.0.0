import './shiftPanelDas.scss';
import { useEffect, useState } from 'react';
import Load from '../../../../component/utils/Load';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Title from '../../../../component/dashboard/Title/Title';
import ShiftPanelDasConf from './ShiftPanelDasConf/ShiftPanelDasConf';

const ShiftPanelDas = () => {

    const [query, setQuery] = useState({ active: true });
    const [vew, setVew] = useState(null);
    const [seting, setSeting] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleVew = (v) => setVew(v === vew ? null : v);
    const handleSetings = (s) => setSeting(s === seting ? null : s);

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

            {vew !== null && vew !== 'IN' &&
                <section className='shiftPanelDasSect'>
                    <p onClick={() => handleSetings('conf')} style={{ color: seting === 'conf' ? '#ec3639' : '' }}>Configuraciones</p>
                    <p onClick={() => handleSetings('book')} style={{ color: seting === 'book' ? '#ec3639' : '' }}>Reservas</p>
                    <p onClick={() => handleSetings('gest')} style={{ color: seting === 'gest' ? '#ec3639' : '' }}>Gestión</p>
                </section>
            }

            {(vew !== null && vew !== 'IN') && (seting === 'conf') &&
                <ShiftPanelDasConf query={query} setQuery={setQuery} setLoading={setLoading} />
            }

            <Load loading={loading} />
        </div>
    );
};

export default ShiftPanelDas;