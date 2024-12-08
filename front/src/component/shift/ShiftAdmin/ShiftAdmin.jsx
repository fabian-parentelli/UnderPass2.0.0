import './shiftAdmin.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getShiftconfApi } from '../../../helpers/shiftsconf/getShiftconf.api.js';
import ShiftAlmanac from '../ShiftAlmanac/ShiftAlmanac.jsx';

const ShiftAdmin = ({ userId }) => {

    const navigate = useNavigate();
    const [config, setConfig] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getShiftconfApi({ userId });
            if (response.status === 'success') setConfig(response.result.docs[0]);
            else console.error(response);
        }; fetchData();
    }, []);

    return (
        <div className='shiftAdmin'>
            <p>Aqui puedes autogestionarte la reservas de turnos.</p>
            <p>Podrás ver la disponibilidad y ocupar las reservas solicitadas.</p>
            <p>Si precisas ayuda has <span className='colSH' onClick={() => navigate('/help')}>aqui</span> la encontraras.</p>
            <ShiftAlmanac config={config} />
        </div>
    );
};

export default ShiftAdmin;