import './isLoggedUrser.scss';
import { useNavigate } from 'react-router-dom';

const IsLoggedUrser = ({ setPath }) => {

    const navigate = useNavigate();

    const handleClik = (goTo) => {
        localStorage.setItem('path', setPath);
        if (goTo === 'login') navigate('/login');
        else navigate('/register');
    };

    return (
        <div className='isLoggedUrser'>
            <div className='isLoggedUrserDiv'>
                <h2>No has iniciado sesión</h2>
                <div className='isLoggedUrserBtn'>
                    <button onClick={() => handleClik('login')} className='btn btnC'>Iniciar sesión</button>
                    <button onClick={() => handleClik('register')} className='btn btnD'>Registrarte</button>
                </div>
                <p>Si no estas registrado, o no has iniciado sesión, aquí puedes hacerlo.</p>
            </div>

            <img src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1721084212/images/da3jf0hvb5sd55ttlbag.png" alt="img" />
        </div>
    );
};

export default IsLoggedUrser;