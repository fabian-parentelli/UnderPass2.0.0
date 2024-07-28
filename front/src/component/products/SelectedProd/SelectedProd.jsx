import './selectedProd.scss';
import { useState } from 'react';
import Load from '../../utils/Load';
import SnackbarAlert from '../../utils/SnackbarAlert';
import NewProductC from '../NewProductC/NewProductC';

const SelectedProd = ({ userId }) => {

    const [vew, setVew] = useState(true);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });

    return (
        <div className='selectedProd'>
            <button
                className='btn btnB'
                onClick={() => setVew(!vew)}
            >
                {vew ? 'Crear' : 'Ver'}
            </button>

            {vew
                ? 'Ver los productos'
                : <NewProductC userId={userId} setOpen={setOpen} setMessage={setMessage} setLoading={setLoading} />
            }
            <SnackbarAlert open={open} message={message} />
            <Load loading={loading} />
        </div>
    );
};

export default SelectedProd;