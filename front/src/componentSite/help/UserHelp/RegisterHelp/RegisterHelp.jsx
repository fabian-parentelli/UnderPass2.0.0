import './registerHelp.scss';
import { Link } from 'react-router-dom';

const RegisterHelp = () => {

    return (
        <div className='registerHelp'>
            <div className='registerHelpUp'>
                <h5 id='registerHelp'>Registro</h5>
                <p>A continuación te mostraremos como puedes registrarte.</p>
                <Link to={'/videohelp/registerHelp'} className='registerHelpVideo'>Video tutorial</Link>
            </div>
            <div className='registerHelpCont'>
                <p>En la barra de navegación en la parte superior, vas a encontrar un menú desplegable llamado <strong>Usuario</strong>, ahí vas a encontrar la opción <strong>Registrarte</strong>. Esto te dirigirá a la página de registros.
                    <br />
                    En esta página vas a encontrar  un formulario en el cual vas a tener que completar. El primer campo es <strong>Nombre</strong>, como lo indica debes completar tu nombre completo, ejemplo “Rachel Green”.
                    <br />
                    El segundo campo es <strong>Cumpleaños</strong>, en el cual vas a ingresar tu fecha de nacimiento, son tres campos, día, mes y año. Ejemplo 8 febrero 1971.
                    <br />
                    El tercer campo es el <strong>email</strong>, ten en cuenta de verificar que esté bien escrito. Te pasamos el ejemplo reachelgreen@email.com
                    <br />
                    <strong>Contraseña</strong>, es el campo donde ingresas una contraseña única y de uso privado. Evita publicarlo o difundirlo. Te damos un ejemplo reachel_green1971.
                    <br />
                    <strong>Localidad</strong>, la idea de este campo es que ingreses la ubicación de dónde vives. Este dato sirve para agrupar los eventos más cercanos a tu zona de residencia. El campo inicial es <strong>Provincia</strong> en donde vas a ingresar la provincia en donde vives, ejemplo Buenos Aires. En el campo <strong>Ciudad</strong> el ejemplo es Bernal.
                    <br />
                    En el caso de ser de capital en el campo de ciudad escribe el barrio.<br/>
                    Todos los campos son obligatorios no podrás enviar el formulario hasta que estén todos los campos con los datos ingresados.<br/>
                    Sobre la parte superior a la derecha, puedes subir una imagen de perfil. Esta no es obligatoria, ya que te daremos una por defecto. Una vez registrado es el <span>Panel</span> puedes agregar, modificar tu imagen o puedes elegir algún avatar que te guste.<br/> Una vez que termines de regístrate, la plataforma ya te inicia sesión para que te ahorres ese paso.
                </p>
                <div className='registerHelpImg'>
                    <img src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1720642784/help/kdsw6a5yzlihl3nyb79q.png" alt="nav-register" />
                    <img src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1720642784/help/gow6cxtyd30vw7seehcn.png" alt="register" />
                </div>
            </div>
        </div>
    );
};

export default RegisterHelp;