import './selectedProd.scss';
import { useState } from 'react';
import Load from '../../utils/Load';
import SnackbarAlert from '../../utils/SnackbarAlert';
import NewProductC from '../NewProductC/NewProductC';
import VewProductC from '../VewProductC/VewProductC';
import BookingProd from '../bookingProd/BookingProd';

const SelectedProd = ({ userId }) => {

    const [vew, setVew] = useState('vew');
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });

    const handleVew = (id) => setVew(vew === id ? 'vew' : id);

    return (
        <div className='selectedProd'>

            <div className='selectedProdBTNS'>
                <button className='btn btnB' onClick={() => handleVew('vew')} style={{ color: vew === 'vew' && '#ffff' }}>Ver</button>
                <button className='btn btnB' onClick={() => handleVew('create')} style={{ color: vew === 'create' && '#ffff' }}>Crear</button>
                <button className='btn btnB' onClick={() => handleVew('booking')} style={{ color: vew === 'booking' && '#ffff' }}>Reservas</button>
            </div>

            {vew === 'vew' && <VewProductC userId={userId} setLoading={setLoading} />}
            {vew === 'create' &&
                <NewProductC userId={userId} setOpen={setOpen} setMessage={setMessage} setLoading={setLoading} />
            }
            {vew === 'booking' && <BookingProd userId={userId} setLoading={setLoading} type='product' />}

            <SnackbarAlert open={open} message={message} />
            <Load loading={loading} />
        </div>
    );
};

export default SelectedProd;