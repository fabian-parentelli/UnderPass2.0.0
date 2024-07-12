import './register.scss';
import UserRegister from '../../../component/user/register/UserRegister/UserRegister';
import { Link } from 'react-router-dom';

const Register = () => {

    return (
        <div className='Register'>

            <div className='registerLeft'>
                <div className='registerLeftUp'>
                    <h1>Registrate</h1>
                    <h2>Nueva Cuenta</h2>
                    <p>¿estás registrado? <Link className='pLink' to={'/login'}>Login</Link></p>
                </div>
                <div className='registerLeftLine'></div>
                <p className='registerLeftP'>¡Únete a UnderPass y experimenta la emoción de ser parte de nuestra comunidad exclusiva de amantes de la arte y eventos en vivo! Al registrarte, desbloquearás una serie de beneficios increíbles</p>
            </div>
            
            <UserRegister />
        </div>
    );
};

export default Register;