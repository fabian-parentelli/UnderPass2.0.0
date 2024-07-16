import './dataUserBanner.scss';
import { useNavigate } from 'react-router-dom';
import FormDUB from './FormDUB/FormDUB';

const DataUserBanner = ({ setValues, setIsUser }) => {

    const navigate = useNavigate();

    const handleSession = () => {
        localStorage.setItem('path', 'userbanner');
        navigate('/login');
    };

    return (
        <div className='dataUserBanner'>
            <div className='notUser'>
                <h2>No te encuentras logueado.</h2>
                <button onClick={handleSession} className='btn btnD'>Iniciar sesión</button>
                <FormDUB setValues={setValues} setIsUser={setIsUser} />
            </div >
            <img src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1721084212/images/da3jf0hvb5sd55ttlbag.png" alt="img" />
        </div>
    );
};

export default DataUserBanner;