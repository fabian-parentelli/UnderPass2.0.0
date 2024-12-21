import './shiftDataAdminUser.scss';
import { useState } from 'react';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ShiftFindCustomer from '../tools/ShiftFindCustomer/ShiftFindCustomer';
import ShiftInputUser from '../tools/ShiftInputUser/ShiftInputUser';

const ShiftDataAdminUser = ({ configId, setDataUser }) => {

    const [vew, setVew] = useState(null);

    const handleVew = (id) => setVew(vew === id ? null : id);

    return (
        <div className='shiftDataAdminUser'>
            <h4>Datos del cliente</h4>

            <section>
                <button className='btn btnSH' onClick={() => handleVew('customer')}>Clientes</button>
                <button className='btn btnSH' onClick={() => handleVew('new')}>Nuevo</button>
            </section>

            {vew === null &&
                <>
                    <p className='pgray'><span style={{ textDecoration: 'underline' }}>Clientes:</span> En esta opción verás clientes que en el pasado ya han seleccionados turnos y podrás elegir entre alguno de ellos para completar los datos del cliente.</p>
                    <p className='pgray'><span style={{ textDecoration: 'underline' }}>Nuevo:</span> Si es la primera vez que este cliente utiliza tus instalaciones, completa los datos.</p>
                    <PermContactCalendarIcon className='shiftDataAdminUserIcon' />
                </>
            }
            {vew === 'customer' && <ShiftFindCustomer configId={configId} />}
            {vew === 'new' && <ShiftInputUser setDataUser={setDataUser} />}
        </div>
    );
};

export default ShiftDataAdminUser;