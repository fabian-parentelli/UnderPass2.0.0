import './messageNotLogged.scss';
import { Link, useNavigate } from 'react-router-dom';

const MessageNotLogged = ({ typeId }) => {

    const navigate = useNavigate();

    const handleClick = (goTo) => {
        localStorage.setItem('path', `uniquenews/${typeId}`);
        if (goTo === 'login') navigate('/login');
        else navigate('/register');
    };

    return (
        <div className='messageNotLogged'>
            <p className='messageNotLoggedLink' onClick={() => handleClick('login')}>Inicia sesión</p>
            <p>o</p>
            <p className='messageNotLoggedLink' onClick={() => handleClick('register')}>Regístrate</p>
            <p>para poder escribir mensjaes.</p>
        </div>
    );
};

export default MessageNotLogged;