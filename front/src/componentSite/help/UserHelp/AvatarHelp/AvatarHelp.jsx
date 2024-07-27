import './avatarHelp.scss';
import TitleHelp from '../../TitleHelp/TitleHelp';
import { imagesHelp } from '../../../../utils/imagesData.utils.js';

const AvatarHelp = () => {

    return (
        <div id='avatarHelp'>
            <TitleHelp
                title='Modificar avatares'
                paragraph='Puedes elegir un avatar o utilizar el tuyo propio'
                goTo='avatarHelp'
            />

            <div className='avatarHelpPhot'>
                <img src={imagesHelp.panel} alt="img" />
                <img src={imagesHelp.navAvatar} alt="img" />
            </div>

            <p className='avatarHelpP'>
                Una vez que ya hayas <strong>Iniciado sesión</strong>, en la barra de navegación en la parte superior, vas a encontrar un menú desplegable llamado <strong>Usuario</strong>, ahí vas a encontrar la opción <strong>Panel</strong>. Eso te llevará a tu <strong>Panel de administración</strong>. En la parte izquierda vas a encontrar un menú interno. Ingresa a <strong>Panel </strong>.<br />
                Una vez que ingreses a <strong>Avatares</strong>, puedes visualizar la imagen que viene por default. Sobre la parte superior del menú vas a encontrar dos botones en el cual vas a poder elegir entre utilizar un <strong>Avatar</strong> o <strong>Tu foto</strong> de perfil.
            </p>

            <div className='avatarHelpImg'>
                <img src={imagesHelp.avatar} alt="img" />
            </div>

            <p className='avatarHelpP'>
                Simplemente una vez que le das clcik al botón de <strong>Avatar</strong> se abrirá en la pantalla una lista de avatares selecciona elegir el que más te guste y listo.
                Cuando haces clic en <strong>Tu foto</strong>, se abrirá en la pantalla un pequeño espacio para actualizar tu imagen de perfil. Esto te permitirá mantener tu perfil fresco y personalizado. ¿Cómo funciona? Es simple: simplemente selecciona la opción para cargar una foto desde tu dispositivo haciendo clic en el icono de la nube, luego selecciona la imagen que deseas usar y presiona el botón 'Subir'. En cuestión de segundos, tu nueva foto de perfil estará lista y actualizada, ¡así de fácil!
            </p>

            <div className='avatarHelpImg'>
                <img src={imagesHelp.avatarHistory} alt="img" />
            </div>

            <p className='avatarHelpP'>
                En nuestra página web, te ofrecemos la comodidad de acceder a un historial de avatares y fotos de perfil que has utilizado anteriormente. Esto significa que puedes revisar las imágenes que has utilizado en el pasado y, si lo deseas, seleccionar una de ellas para tu perfil actual. ¿Cómo funciona? Muy sencillo: simplemente navega por tu historial de avatares y fotos de perfil anteriores. Al encontrar una imagen que te guste, puedes previsualizarla antes de seleccionarla haciendo clic en el botón 'Elegir'. En cuestión de segundos, tu foto de perfil se actualizará con la imagen que has seleccionado previamente. ¡Es una forma rápida y conveniente de mantener tu perfil actualizado con una imagen que ya te ha gustado antes!
            </p>

        </div>
    );
};

export default AvatarHelp;