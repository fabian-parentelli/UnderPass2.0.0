import './bookingProd.scss';
import { useState } from 'react';
import YourBookings from './YourBookings';
import { Link } from 'react-router-dom';
import BookedYou from './BookedYou';
import UnderMarketLog from '../../fonts/UnderMarketLog/UnderMarketLog';

const BookingProd = ({ userId, setLoading, type }) => {

    const [vew, setVew] = useState(null);
    const handleVew = (id) => setVew(vew === id ? null : id);

    return (
        <div className='bookingProd'>

            <div className='bookingProdBtns'>
                <button className='btnCard' style={{ color: vew === 'post' ? '#00bf63' : '' }} onClick={() => handleVew('post')}>Tus reservas</button>
                <button className='btnCard' style={{ color: vew === 'get' ? '#00bf63' : '' }} onClick={() => handleVew('get')}>Te reservaron</button>
            </div>

            {vew === 'post' && <YourBookings userId={userId} setLoading={setLoading} type={type} />}
            {vew === 'get' && <BookedYou userId={userId} setLoading={setLoading} type={type} />}
            {!vew &&
                <div className='bookingProdMessage'>
                    <h3>Aquí podras ver las reservas de tus productos.</h3>
                    <p>Al seleccionar <span>"Tus reservas"</span>, podras ver aquellos productos que estas esperando que vuelvan a tener stock.</p>
                    <p>Si seleccionas <span>"Te reservaron"</span> podras ver a esas personas que estan esperando los productos que se te agotaron.</p>
                    <p>Aquí te dejamos una <Link to={'/help'} className='bookingProdLink'>ayudita</Link>.</p>

                    <div style={{marginTop: '1rem'}}>
                        <UnderMarketLog size={3} />
                    </div>
                </div>
            }

        </div>
    );
};

export default BookingProd;