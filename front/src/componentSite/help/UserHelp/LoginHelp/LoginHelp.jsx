import './loginHelp.scss';
import { Link } from 'react-router-dom';

const LoginHelp = () => {

    return (
        <div className='loginHelp'>
            <div className='line'></div>

            <div className='registerHelpUp'>
                <h5 id='loginHelp'>Iniciar sesión</h5>
                <p>Pasos a seguir para iniciar sesión</p>
                <Link to={'/videohelp/loginHelp'} className='registerHelpVideo'>Video tutorial</Link>
            </div>

            <div className='registerHelpCont'>
                <p>En la barra de navegación en la parte superior, vas a encontrar un menú desplegable llamado <strong>Usuario</strong>, ahí vas a encontrar la opción <strong>Iniciar sesión</strong>. Esto te dirigirá a la página de login.<br />
                    En esta página vas a encontrar un formulario en el cual vas a tener que completar. El primer campo es <strong>email</strong>, en este deberás completar tu email tal cual lo registraste.<br />
                    El siguiente campo es <strong>Contraseña</strong> la cual también debe de ser exactamente igual a como lo escribiste en el registro. Recuerda es un dato solo tuyo y no lo compartas con nadie.<br />
                    Luego de completar estos dos datos haz clic en el botón de <strong>Iniciar sesión</strong>.<br />
                    Si entraste al apartado de iniciar sesión y no te has registrado aún, puedes dar clic en <strong>Registrarte</strong>, esto te llevará a la página para que puedas completar tus datos.<br />
                    Algo que suele pasar es que se te olvida la contraseña, no te preocupes, no podemos darte tu contraseña porque ni siquiera nosotros la sabemos pero puedes crear una contraseña nueva. Ingresa a <strong>Recuperar contraseña</strong> y sigue los pasos.
                </p>
                <div className='registerHelpImg'>
                    <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1711795574/helps/mo50wapmws1z0e9wtlqp.png" alt="nav-register" />
                    <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1711795574/helps/blkynhzkomlke29odi2l.png" alt="register" />
                </div>
            </div>
        </div>
    );
};

export default LoginHelp;