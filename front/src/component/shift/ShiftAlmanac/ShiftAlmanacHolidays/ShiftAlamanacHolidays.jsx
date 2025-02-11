import './shiftAlmanacHolidays.scss';
import { useEffect, useState } from 'react';
import { useLoginContext } from '../../../../context/LoginContext';

const ShiftAlmanacHolidays = ({ config }) => {

    const [status, setStatus] = useState('');
    const { user } = useLoginContext();

    useEffect(() => {
        const today = new Date();
        const startHolidays = new Date(config.holidaysDate.holdaysOn);
        const endHolidays = new Date(config.holidaysDate.holdaysOff);
        if (today < startHolidays) setStatus('before');
        else if (today >= startHolidays && today <= endHolidays) setStatus('during');
        else if (today > endHolidays) setStatus('after');
    }, [config]);

    return (
        <div className='shiftAlmanacHolidays'>

            {status === 'before' &&
                <>
                    <p>Hola,{user.logged ? ` ${user.data.name}` : ''} queremos contarte que estaremos de vacaciones desde el {new Date(config.holidaysDate.holdaysOn).toISOString().slice(0, 10).split('-').reverse().join('/')} hasta el {new Date(config.holidaysDate.holdaysOff).toISOString().slice(0, 10).split('-').reverse().join('/')}.</p>
                </>
            }

            {status === 'during' &&
                <>
                   <p>Hola,{user.logged ? ` ${user.data.name}` : ''} queremos contarte que estamos cerrado por vacaciones puedes ir agendando turnos a partir del {(() => { const nextDay = new Date(config.holidaysDate.holdaysOff); nextDay.setDate(nextDay.getDate() + 1); return nextDay.toISOString().slice(0, 10).split('-').reverse().join('/'); })()}.</p>


                </>
            }

        </div>
    );
};

export default ShiftAlmanacHolidays;