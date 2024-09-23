import './bookingDasComp.scss';
import { useState } from 'react';
import BookingVewAll from './BookingVewAll/BookingVewAll';
import Load from '../../utils/Load';

const BookingDasComp = ({ type }) => {

    const [loading, setLoading] = useState(false);
    const [vew, setVew] = useState(null);
    const handleVew = (id) => setVew(vew === id ? null : id);

    return (
        <div className='bookingDasComp'>

            <div className='bookingDasCompBtn'>
                <button style={{ backgroundColor: vew === 'all' ? '#00756F' : '' }} className='btn btnD' onClick={() => handleVew('all')}>Todas</button>
                <button style={{ backgroundColor: vew === 'user' ? '#00756F' : '' }} className='btn btnD' onClick={() => handleVew('user')}>Usuario</button>
            </div>

            {vew === 'all' && <BookingVewAll type={type} setLoading={setLoading} />}
            {vew === 'user' && <p>Usuarios</p>}

            <Load loading={loading} />
        </div>
    );
};

export default BookingDasComp;