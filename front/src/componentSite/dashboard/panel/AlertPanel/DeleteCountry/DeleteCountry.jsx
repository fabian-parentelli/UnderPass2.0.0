import { useState } from 'react';
import './deleteCountry.scss';
import FlagIcon from '@mui/icons-material/Flag';
import SnackbarAlert from '../../../../../component/utils/SnackbarAlert';

const DeleteCountry = () => {

    const [open, setOpen] = useState(false);

    const handleCountry = () => {
        localStorage.removeItem('country');
        setOpen(true);
        setTimeout(() => { setOpen(false) }, 2000);
    };

    return (
        <>
            <div className='deleteCountry' onClick={handleCountry}>
                <FlagIcon className='icon' />
                <p>Borrar País</p>
            </div>
            <SnackbarAlert open={open} message={{ status: 'success', mess: 'Se eliminó el país' }} />
        </>
    );
};

export default DeleteCountry;