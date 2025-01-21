import './shiftSuspend.scss';
import { useEffect, useState } from 'react';
import { useLoginContext } from '../../../context/LoginContext';
import ShiftPospone from './ShiftPostpone/ShiftPostpone';
import SnackbarAlert from '../../utils/SnackbarAlert';

const ShiftSuspend = ({ shift, setModal }) => {

    const { user } = useLoginContext();
    const [admin, setAdmin] = useState(false);
    const [snack, setSnack] = useState({ open: false, message: { status: '', mess: '' } });

    useEffect(() => {
        if (user.data._id === shift.userId) setAdmin(true);
        else if (user.data.role !== 'user') setAdmin(true);
        else setAdmin(false);
    }, []);

    return (
        <div className='shiftSuspend'>
            <h3>Posponer || Suspender, reserva.</h3>
            {shift && <ShiftPospone admin={admin} shift={shift} setSnack={setSnack} setModal={setModal} />}
            <SnackbarAlert message={snack.message} open={snack.open} />
        </div>
    );
};

export default ShiftSuspend;