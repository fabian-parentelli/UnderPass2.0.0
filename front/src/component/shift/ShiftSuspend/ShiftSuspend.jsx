import './shiftSuspend.scss';
import { useEffect, useState } from 'react';
import { useLoginContext } from '../../../context/LoginContext';
import ShiftPospone from './ShiftPostpone/ShiftPostpone';

const ShiftSuspend = ({ shift }) => {

    const [admin, setAdmin] = useState(false);
    const { user } = useLoginContext();

    useEffect(() => {
        if (user.data._id === shift.userId) setAdmin(true);
        else if (user.data.role !== 'user') setAdmin(true);
        else setAdmin(false);
    }, []);

    return (
        <div className='shiftSuspend'>
            <h3>Posponer || Suspender, reserva.</h3>
            {shift && <ShiftPospone admin={admin} shift={shift} />}
        </div>
    );
};

export default ShiftSuspend;