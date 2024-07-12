import './recoverPass.scss';
import ForwardIcon from '@mui/icons-material/Forward';
import { Link } from 'react-router-dom';

const RecoverPassHelp = () => {

    return (
        <div className='recoverPass'>
            <div className='line'></div>
            <div className='registerHelpUp'>
                <h5 id='recoverPassHelp'>Recuperar contraseña</h5>
                <p>Pasos a seguir para recuperar tu contraseña</p>
                <Link to={'/videohelp/recoverPassHelp'} className='registerHelpVideo'>Video tutorial</Link>
            </div>

            <div className='recoverPassCont'>

                <div className='recoverPassItem'>
                    <p>La contraseña que ha sido olvidada, no se puede volver a recuperar, pero si podemos modificarla para recuperar el acceso a tu cuenta. Esto consta de varios pasos lo primero es ingresar al menú de navegación, desplegar <strong>Usuario</strong>, e ingresar a <strong>Iniciar sesión</strong>.<br />
                        Una vez que ingresamos, buscamos en la parte inferior del formulario <strong>Recuperar contraseña</strong> y le damos click.
                    </p>
                    <div className='recPassImg'>
                        <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1711795574/helps/mo50wapmws1z0e9wtlqp.png" alt="nav-register" />
                        <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1711795574/helps/blkynhzkomlke29odi2l.png" alt="register" />
                        <ForwardIcon className='arrowImg' />
                    </div>
                </div>

                <div className='recoverPassItem'>
                    <p>Una vez ingresado a la página para recuperar tu contraseña, te va a pedir que ingreses tu email en el campo <strong>¿Cuál es tu email?</strong>, una vez que hagas esto esperas al mensaje que aparece en la parte inferior “Revisa tu correo electrónico, si no encuentras el correo, revisa tu casilla de sapm”.<br />
                        Al dirigirte a tu correo, si no te ha llegado revisa la casilla de spam y cuando lo encuentres dale click a la palabra <strong>enlace</strong> esta te va a re direccionar a otro formulario seguro para que vuelvas a escribir tu contraseña.
                    </p>
                    <div className='recPassImg'>
                        <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1711816032/helps/xncguq2nw1xxxkm6zivs.png" alt="nav-register" />
                        <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1711816031/helps/f7zwweri6kds3mkrhgzc.png" alt="register" />
                    </div>
                </div>

                <div className='recPassItemVert'>
                    <p>Una vez que te encuentres nuevamente en nuestra página <strong>Recuperar Contraseña</strong>. Vas a ver dos campos.<br />
                        <strong>Nueva contraseña</strong> en este campo escribe una contraseña, recuerda no compartirla ni hacerla pública.<br />
                        En el segundo campo <strong>Confirma contraseña</strong>, vuelve a escribir la contraseña para confirmar que es correcta.<br />
                        No podrás dar click en <strong>Cambiar Contraseña</strong> hasta que esté confirmada la contraseña, al igual que el mensaje de la parte inferior “Los campos no son iguales”. Este no desaparecerá hasta que este confirmada la contraseña.<br />
                        Listo una vez terminado te redirigirá la página al Inicio de sesión y a disfrutar…
                    </p>
                    <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1711816792/helps/eeanhoyj6340tw8bliui.png" alt="passConfimr" />
                </div>
            </div>
        </div>
    );
};

export default RecoverPassHelp;